import { useState, useEffect } from "react";

const cache = new Map();

export const useFetchWithCache = (key, url, cacheDuration = 120000) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const now = new Date();

    if (cache.has(key)) {
      const cachedValue = cache.get(key);
      if (now - cachedValue.timeStamp < cacheDuration) {
        setData(cachedValue.value);
        return;
      }
    }

    const fetch = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url);
        cache.set(key, { value: result, timeStamp: now });
        setData(result);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [cacheDuration, key, url]);

  return {
    data,
    isLoading,
    isError,
  };
};
