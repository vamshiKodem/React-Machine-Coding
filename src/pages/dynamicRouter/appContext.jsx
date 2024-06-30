import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  const theme = isDarkTheme ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkTheme, theme]);

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, isLoggedIn, toggleLoginStatus }}
    >
      {children}
    </AppContext.Provider>
  );
};
