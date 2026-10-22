import { useContext } from "react";
import { ThemeContext } from "../theme/theme-context";

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
}

export { useTheme };
