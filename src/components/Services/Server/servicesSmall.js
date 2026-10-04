import API_URL from '../../Common/URL/API_URL.js';
import {
  ApolloClient,
  InMemoryCache,
  gql as apolloGql,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { persistCache } from 'apollo3-cache-persist';

const idbStorage = {
  dbPromise: null,

  async getDB() {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open('info_center_template-cache', 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('keyval')) {
          db.createObjectStore('keyval');
        }
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => reject(event.target.error);
    });

    return this.dbPromise;
  },

  async getItem(key) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('keyval', 'readonly');
      const store = tx.objectStore('keyval');
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async setItem(key, value) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('keyval', 'readwrite');
      const store = tx.objectStore('keyval');
      const req = store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },

  async removeItem(key) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('keyval', 'readwrite');
      const store = tx.objectStore('keyval');
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },
};

const httpLink = createHttpLink({
  uri: `${API_URL.origin}`,
  credentials: 'include', 
});

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return decodeURIComponent(match[2]);
  return null;
}


const CACHE_MAX_AGE = 1000 * 60 * 60 * 24 * 30;
const cache = new InMemoryCache({});

export async function initApolloCache() {
  await persistCache({
    cache,
    storage: idbStorage,
  });
}

function cleanupOldCache() {
  const raw = window.localStorage.getItem('apollo-cache-persist');
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    const now = Date.now();
    let changed = false;

    for (const key in parsed) {
      const entry = parsed[key];
      if (entry && entry._timestamp && now - entry._timestamp > CACHE_MAX_AGE) {
        delete parsed[key];
        changed = true;
      }
    }

    if (changed) {
      window.localStorage.setItem('apollo-cache-persist', JSON.stringify(parsed));
    }
  } catch (e) {
    console.warn('Failed cleaning old cache', e);
  }
}

cleanupOldCache();

export const client2 = new ApolloClient({
  cache,
});

export const gql2 = apolloGql;
