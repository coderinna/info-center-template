import API_URL from "../../Common/URL/API_URL.js";
import {ApolloLink,
  ApolloClient,
  InMemoryCache,
  gql as apolloGql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { persistCache } from "apollo3-cache-persist";


const sessionLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const data = response.data;

    const hasIdFail = (obj) => {
      if (!obj || typeof obj !== "object") return false;

      if (obj.res === "ID_FAIL") {
        return true;
      }

      return Object.values(obj).some(hasIdFail);
    };

    if (hasIdFail(data)) {
      window.dispatchEvent(new CustomEvent("sessionExpired"));
    }

    return response;
  });
});

const idbStorage = {
  dbPromise: null,

  async getDB() {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open("info_center_template-cache", 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("keyval")) {
          db.createObjectStore("keyval");
        }
      };

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });

    return this.dbPromise;
  },

  async getItem(key) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("keyval", "readonly");
      const store = tx.objectStore("keyval");
      const req = store.get(key);

      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async setItem(key, value) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("keyval", "readwrite");
      const store = tx.objectStore("keyval");
      const req = store.put(value, key);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },

  async removeItem(key) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("keyval", "readwrite");
      const store = tx.objectStore("keyval");
      const req = store.delete(key);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },
};

const httpLink = createHttpLink({
  uri: `${API_URL.origin}`,
  credentials: "include",
});

function getCookie(name) {
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? decodeURIComponent(match[2]) : null;
}

const authLink = setContext((_, { headers }) => {
  const csrfToken = getCookie("XSRF-TOKEN");

  return {
    headers: {
      ...headers,
      "X-CSRF-Token": csrfToken || "",
    },
  };
});

export const errorLink = onError(
  ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        const code = err.extensions?.code;

        if (
          code === "UNAUTHENTICATED" ||
          code === "INVALID_CSRF" ||
          code === "ID_FAIL"
        ) {
          window.dispatchEvent(new CustomEvent("sessionExpired"));
          return;
        }
      }
    }

    if (networkError) {
      const status =
        networkError.statusCode ||
        networkError.status ||
        networkError.response?.status ||
        0;

      if (status === 401 || status === 403) {
        window.dispatchEvent(new CustomEvent("sessionExpired"));
      }
    }
  }
);

const cache = new InMemoryCache();

export let client = null;

const DAY = 24 * 60 * 60 * 1000; // 1 day max apollo cache
const CACHE_TIMESTAMP_KEY = "apollo-cache-timestamp";

export async function initApolloClient() {
  console.log("[APOLLO] init...");

  const lastCache = Number(localStorage.getItem(CACHE_TIMESTAMP_KEY));

  if (!lastCache || Date.now() - lastCache > DAY) {
    console.log("[APOLLO] Cache expired");
    await idbStorage.removeItem("apollo-cache-persist");
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now());
  }

  await persistCache({
    cache,
    storage: idbStorage,
    maxAge: DAY,
  });

  client = new ApolloClient({
   link: ApolloLink.from([
    errorLink,
    sessionLink,
    authLink,
    httpLink,
  ]),
    cache,
  });

  console.log("[APOLLO] ready");

  return client;
}

export function getApolloClient() {
  if (!client) {
    throw new Error("Apollo not initialized");
  }
  return client;
}

export const gql = apolloGql;