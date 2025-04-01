import { createContext, useContext, FC } from "react";
import useThemeLogic from "../hook/useThemeLogic";
import { ThemeContextType, ThemeProviderProps } from "src/types/types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useThemeLogic();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
