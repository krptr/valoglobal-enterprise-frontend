import { createContext } from "react";

type Theme = "lightMode" | "darkMode";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export { ThemeContext };
export type { Theme, ThemeContextValue };
