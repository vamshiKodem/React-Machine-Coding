export function useDebounce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.apply(this, ...args);
    }, delay);
  };
}
