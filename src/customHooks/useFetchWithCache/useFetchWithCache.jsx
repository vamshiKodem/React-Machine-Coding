const cache = new Map();

export const fetchWithCache = async (key, url, cacheDuration = 2000) => {
  const now = new Date().getTime();

  if (cache.has(key)) {
    const cachedValue = cache.get(key);
    if (now - cachedValue.timeStamp < cacheDuration) {
      return { data: cachedValue.value };
    }
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    cache.set(key, { value: result, timeStamp: now });
    return { data: result };
  } catch (error) {
    return error;
  }
};
