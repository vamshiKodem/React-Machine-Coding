export const useLocalStorage = (key) => {
  const getItem = (key) => {
    try {
      const result = window.localStorage.getItem(key);
      return result ? JSON.parse(result) : undefined;
    } catch (err) {
      console.log("error getting the item", err);
    }
  };

  const setItem = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log("error setting the item", err);
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log("error clearing the item", err);
    }
  };

  const removeAll = () => {
    try {
      localStorage.clear();
    } catch (err) {
      console.log("error clearing local storage", err);
    }
  };

  return {
    getItem,
    removeItem,
    removeAll,
    setItem,
  };
};
