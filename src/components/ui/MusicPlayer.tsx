import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import useMusicPlayer from "../../hook/useMusicPlayer";
import useVisibility from "../../hook/useVisibility";

function MusicPlayer() {
  const { t } = useTranslation();
  const {
    isOpen,
    handlePrevious,
    isPlaying,
    handleNext,
    handlePlayPause,
    audioRef,
    currentSong,
    nextSong,
    handleOpenMusicPlayer,
  } = useMusicPlayer();
  const { isVisible } = useVisibility();

  return (
    <article
      className={`hidden md:block ${
        isVisible ? "opacity-100" : "translate-x-full opacity-0"
      } overflow-hidden`}
    >
      <article className="music-player__article fixed bottom-[18px] left-2 flex gap-[6px] select-none">
        <div
          className={`music-player__container ${
            isOpen ? "active" : ""
          } flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center rounded-md bg-gray-800 text-white p-3`}
        >
          {/* Imagen de portada */}
          <div className="flex-shrink-0 flex items-center order-last md:order-first gap-2">
            <div>
              <img
                src={currentSong.cover}
                alt="Portada del álbum"
                title={`${t("musicPlayer.albumCover")} "${currentSong.album}"`}
                className="cover rounded-sm"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>

            {/* Información de la canción */}
            <div className="music-player__text flex-grow">
              <h3
                className="text-[13.25px] font-semibold"
                title={t("musicPlayer.songTitle")}
              >
                {currentSong.title}
              </h3>
              <p
                className="text-[12px] text-gray-400"
                title={t("musicPlayer.artist")}
              >
                {currentSong.artist}
              </p>
            </div>
          </div>

          {/* Controles de reproducción */}
          <div className="music-player__controls items-center space-x-1">
            <button
              title={t("musicPlayer.prev")}
              onClick={handlePrevious}
              className="hover:bg-gray-700 p-2 rounded border-none"
            >
              <FaBackwardStep size={18} />
            </button>

            <button
              title={isPlaying ? t("musicPlayer.pause") : t("musicPlayer.play")}
              onClick={handlePlayPause}
              className="bg-accent hover:bg-black p-3 rounded-full transition-colors duration-300 border-none"
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>

            <button
              onClick={handleNext}
              title={`${t("musicPlayer.next")} "${nextSong.title}"`}
              className="hover:bg-gray-700 p-2 rounded border-none"
            >
              <FaForwardStep size={18} />
            </button>
          </div>

          {/* Audio elemento (oculto) */}
          <audio ref={audioRef} src={currentSong.src} onEnded={handleNext} />
        </div>

        <span
          title={isOpen ? t("musicPlayer.collapse") : t("musicPlayer.expand")}
          className="music-player__close-open material-icons-outlined"
          onClick={handleOpenMusicPlayer}
        >
          {isOpen ? "keyboard_arrow_left" : "keyboard_arrow_right"}
        </span>
      </article>
    </article>
  );
}

export default MusicPlayer;
