import { FC } from "react";
import useAnimation from "../../hook/useAnimation";
import { AnimatedComponentProps } from "src/types/types";

const AnimatedComponent: FC<AnimatedComponentProps> = ({
  children,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
  delay = 0,
}) => {
  const { elementRef, getClasses } = useAnimation({
    threshold,
    animation,
    direction,
    delay,
  });

  return (
    <div ref={elementRef} className={getClasses()}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
