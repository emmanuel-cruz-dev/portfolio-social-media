import useVisibility from "../../hook/useVisibility";
import { scrollToTop } from "../../utils/utils";
import { useTheme } from "../ThemeContext";

function ScrollToTopButton() {
  const { isVisible, progress } = useVisibility();
  const { theme } = useTheme();

  return (
    <button
      className={`up-btn fixed bottom-6 right-6 z-50 bg-colorTertiary hover:bg-black text-white rounded-full cursor-pointer transition-all duration-300 w-14 h-14 flex justify-center items-center ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          background: `conic-gradient(${
            theme === "dark" ? "#fff" : "#5a5a5a"
          } ${progress * 360}deg, transparent ${
            progress * 360
          }deg, transparent 360deg)`,
        }}
      />
      <span className="text-5xl rounded-full material-icons-outlined z-10">
        keyboard_arrow_up
      </span>
    </button>
  );
}

export default ScrollToTopButton;
