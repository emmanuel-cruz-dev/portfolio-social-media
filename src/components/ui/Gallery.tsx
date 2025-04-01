import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useGalleryLogic from "../../hook/useGalleryLogic";
import { FC } from "react";

interface GalleryProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Gallery: FC<GalleryProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const { handleIndexChange } = useGalleryLogic(initialIndex);

  return (
    <div>
      {isOpen && (
        <Lightbox
          slides={images.map((image) => ({ src: image }))}
          open={isOpen}
          close={onClose}
          index={initialIndex}
          carousel={{
            currentIndex: initialIndex,
            onIndexChange: handleIndexChange,
          }}
          // onIndexChange={handleIndexChange}
        />
      )}
    </div>
  );
};

export default Gallery;
