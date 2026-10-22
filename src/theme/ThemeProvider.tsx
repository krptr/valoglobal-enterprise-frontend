import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./theme-context";

function getInitialTheme() {
  const savedThemeInLocalStorage = localStorage.getItem("theme");

  if (
    savedThemeInLocalStorage === "lightMode" ||
    savedThemeInLocalStorage === "darkMode"
  )
    return savedThemeInLocalStorage;

  const savedThemePreferenceInOS = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  return savedThemePreferenceInOS ? "darkMode" : "lightMode";
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "darkMode");
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "darkMode" ? "lightMode" : "darkMode";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
