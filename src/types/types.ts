import { ReactNode } from "react";

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface SkillsCardProps {
  src: string;
  alt: string;
  title: string;
}
