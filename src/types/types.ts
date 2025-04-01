import { ReactNode, RefObject } from "react";

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface UseAnimationProps {
  threshold: number;
  animation: string;
  direction: string;
  delay: number;
}

export interface UseAnimationReturn {
  elementRef: RefObject<HTMLDivElement>;
  getClasses: () => string;
}

export interface AnimatedComponentProps {
  children: ReactNode;
  threshold?: number;
  animation?: string;
  direction?: string;
  delay: number;
}

export interface useGalleryLogicReturn {
  index: number;
  handleIndexChange: (newIndex: number) => void;
}

export interface CarouselProps {
  img1: string;
  img2: string;
  img3: string;
}

export interface SkillsCardProps {
  src: string;
  alt: string;
  title: string;
}
