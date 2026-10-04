import { set, get, del, keys } from "idb-keyval";
const ONE_DAY = 24 * 60 * 60 * 1000; 

const TTL_PREFIX = "ttl:";

export const setTTL = async (key) => {
  await set(`${TTL_PREFIX}${key}`, {
    cachedAt: Date.now(),
  });
};

export const isFresh = async (key, ttl = ONE_DAY) => {
  const entry = await get(`${TTL_PREFIX}${key}`);

  if (!entry) return false;

  return Date.now() - entry.cachedAt < ttl;
};

export const clearTTL = async (key) => {
  await del(`${TTL_PREFIX}${key}`);
};


