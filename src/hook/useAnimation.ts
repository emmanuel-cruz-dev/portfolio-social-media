import { useEffect, useRef } from "react";

const useAnimation = (threshold, animation, direction, delay) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${animation}-in`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, animation]);

  // Construimos las clases basadas en los props
  const getClasses = () => {
    const classes = ["animated", animation];

    if (animation === "slide") {
      classes.push(direction);
    }

    if (delay > 0) {
      classes.push(`delay-${delay}`);
    }

    return classes.join(" ");
  };

  return { elementRef, getClasses };
};

export default useAnimation;
