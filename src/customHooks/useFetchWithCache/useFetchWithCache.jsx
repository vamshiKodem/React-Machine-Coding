const cache = new Map();

export const fetchWithCache = async (key, url, cacheDuration = 20000) => {
  const now = new Date().getTime();

  if (cache.has(key)) {
    console.log("fetching from the cache");
    const cachedValue = cache.get(key);
    if (now - cachedValue.timeStamp < cacheDuration) {
      return { data: cachedValue.value };
    }
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    cache.set(key, { value: result, timeStamp: now });
    console.log("doing the api call");
    return { data: result };
  } catch (error) {
    return error;
  }
};
