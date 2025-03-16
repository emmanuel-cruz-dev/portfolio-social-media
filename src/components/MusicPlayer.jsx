import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import Song1 from "../assets/songs/song1.m4a";
import Song2 from "../assets/songs/song2.m4a";
import Song3 from "../assets/songs/song3.mp3";
import Song4 from "../assets/songs/song4.m4a";
import Song5 from "../assets/songs/song5.m4a";
import Song6 from "../assets/songs/song6.m4a";

import CampAlbum from "../assets/images/camp.jpg";
import TheResistanceAlbum from "../assets/images/the-resistance.jpg";
import SuperunknownAlbum from "../assets/images/superunknown.jpg";
import TalkToMeAlbum from "../assets/images/talk-to-me.jpg";
import ElCaminoAlbum from "../assets/images/el-camino.jpg";
import NewDawn from "../assets/images/new-dawn.jpg";

// Lista de canciones (puedes expandir esto)
const musicList = [
  {
    title: "Les",
    artist: "Childish Gambino",
    src: `${Song1}`,
    cover: `${CampAlbum}`,
    album: "Camp",
  },
  {
    title: "Undisclosed Desires",
    artist: "Muse",
    src: `${Song2}`,
    cover: `${TheResistanceAlbum}`,
    album: "The Resistance",
  },
  {
    title: "Portrait #1",
    artist: "Twelve Foot Ninja",
    src: `${Song3}`,
    cover: `${NewDawn}`,
    album: "New Dawn",
  },
  {
    title: "The Day I Tried To Live",
    artist: "Soundgarden",
    src: `${Song4}`,
    cover: `${SuperunknownAlbum}`,
    album: "Superunknown",
  },
  {
    title: "Le Monde",
    artist: "Richard Carter",
    src: `${Song5}`,
    cover: `${TalkToMeAlbum}`,
    album: "Talk to Me",
  },
  {
    title: "Lonely Boy",
    artist: "The Black Keys",
    src: `${Song6}`,
    cover: `${ElCaminoAlbum}`,
    album: "El Camino",
  },
];

const MusicPlayer = () => {
  const { t } = useTranslation();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const audioRef = useRef(null);

  // Funciones de scroll
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const newProgress = scrollTop / scrollHeight;
      setProgress(newProgress);

      if (newProgress > 0.03) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMusicPlayer = () => {
    setIsOpen(!isOpen);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % musicList.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack === 0 ? musicList.length - 1 : prevTrack - 1
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const currentSong = musicList[currentTrack];

  return (
    <div
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
                //title={t("musicPlayer.albumCover")}
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
              title={t("musicPlayer.next")}
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
    </div>
  );
};

export default MusicPlayer;
