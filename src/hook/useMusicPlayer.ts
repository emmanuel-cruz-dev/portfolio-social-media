import { useState, useRef, useEffect } from "react";
import { musicList } from "../data/musicList";

const useMusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenMusicPlayer = () => {
    setIsOpen(!isOpen);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % musicList.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) => {
      if (musicList.length == 0) {
        return prevTrack;
      }
      return prevTrack === 0 ? musicList.length - 1 : prevTrack - 1;
    });
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentTrack, isPlaying]);

  const currentSong = musicList[currentTrack];
  const prevSong = currentTrack > 0 ? musicList[currentTrack - 1] : null;
  const nextSong = musicList[currentTrack + 1];

  return {
    isOpen,
    handlePrevious,
    isPlaying,
    handleNext,
    handlePlayPause,
    audioRef,
    currentSong,
    currentTrack,
    prevSong,
    nextSong,
    handleOpenMusicPlayer,
  };
};

export default useMusicPlayer;
