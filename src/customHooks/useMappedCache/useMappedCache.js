const TWO_MINUTES = 5 * 1000 * 60;
const cache = new Map();

export const useMappedCache = () => {
  const setCache = (key, response, duration) => {
    cache.set(key, { data: response, expiry: Date.now() + duration });
  };

  const getCache = (key) => {
    const cachedValue = cache.get(key);
    if (cachedValue && Date.now() < cachedValue.expiry) {
      return cachedValue.data;
    } else {
      return undefined;
    }
  };

  const fetchAndCache = async (url, duration = TWO_MINUTES) => {
    const cachedValue = getCache(url);
    console.log(cachedValue);
    if (cachedValue) {
      console.log("fetched data from cache");
      return cachedValue;
    } else {
      try {
        console.log("making service call");
        const rawResponse = await fetch(url);
        const response = await rawResponse.json();
        setCache(url, response, duration);
        return response;
      } finally {
      }
    }
  };

  return {
    fetchAndCache,
  };
};
