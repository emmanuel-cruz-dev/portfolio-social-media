import useAnimation from "../../hook/useAnimation";

const AnimatedComponent = ({
  children,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
  delay = 0,
}) => {
  const { elementRef, getClasses } = useAnimation(
    threshold,
    animation,
    direction,
    delay
  );

  return (
    <div ref={elementRef} className={getClasses()}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
