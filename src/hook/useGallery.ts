import { useState } from "react";

const useGallery = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openGallery = (index: number) => {
    setInitialIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  return { isGalleryOpen, initialIndex, openGallery, closeGallery };
};

export default useGallery;
