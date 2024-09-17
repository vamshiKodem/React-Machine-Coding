export const memoizationWrapper = () => {
  const cache = new Map();

  const memoization = (callback) => {
    return (...args) => {
      const input = JSON.stringify(args);
      if (cache.has(input)) {
        return cache.get(input);
      } else {
        const result = callback(...args);
        cache.set(input, result);
        return result;
      }
    };
  };

  return {
    memoization,
  };
};

export const Memoization = () => {
  const add = (a, b) => {
    console.log("some expensive calculation");
    return a + b;
  };

  const { memoization } = memoizationWrapper();

  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);
  memoization(add)(1, 2);

  return <></>;
};
