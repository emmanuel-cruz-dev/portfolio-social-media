import { useState, useRef, useEffect } from "react";
import { musicList } from "../data/musicList";

const useMusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const audioRef = useRef(null);

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
  }, [currentTrack, isPlaying]);

  const currentSong = musicList[currentTrack];

  return {
    isOpen,
    handlePrevious,
    isPlaying,
    handleNext,
    handlePlayPause,
    audioRef,
    currentSong,
    handleOpenMusicPlayer,
  };
};

export default useMusicPlayer;
