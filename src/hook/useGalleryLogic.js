import { useState } from "react";

const useGalleryLogic = (initialIndex) => {
  const [index, setIndex] = useState(initialIndex);
  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return { index, handleIndexChange };
};

export default useGalleryLogic;
