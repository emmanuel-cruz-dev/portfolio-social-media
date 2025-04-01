import Slider from "react-slick";
import { carouselSettings } from "../../data/carouselSettings";
import { FC } from "react";
import { CarouselProps } from "src/types/types";

const Carousel: FC<CarouselProps> = ({ img1, img2, img3 }) => {
  return (
    <article className="projects__item__slider overflow-hidden">
      <Slider {...carouselSettings}>
        <div>
          <img src={img1} alt="Tarjeta de proyecto" loading="lazy" />
        </div>
        <div>
          <img src={img2} alt="Tarjeta de proyecto" loading="lazy" />
        </div>
        <div>
          <img src={img3} alt="Tarjeta de proyecto" loading="lazy" />
        </div>
      </Slider>
    </article>
  );
};

export default Carousel;
