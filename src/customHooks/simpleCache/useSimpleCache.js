const TWO_MINUTES = 5 * 1000;
export const useSimpleCache = () => {
  const cache = new Map();

  const setCache = (key, response, duration) => {
    cache.set(key, { data: response, expiry: Date.now() + duration });
  };

  const getCache = (key) => {
    const cachedValue = cache.get(key);
    if (cachedValue && Date.now() < cachedValue.expiry) {
      return cachedValue;
    } else {
      return undefined;
    }
  };

  const fetchAndCache = async (url, duration = TWO_MINUTES) => {
    const cachedValue = getCache(url);
    if (cachedValue) {
      return cachedValue;
    } else {
      const rawResponse = await fetch(url);
      const response = await rawResponse.json();
      setCache(url, response, duration);
      return response;
    }
  };

  return {
    fetchAndCache,
  };
};
