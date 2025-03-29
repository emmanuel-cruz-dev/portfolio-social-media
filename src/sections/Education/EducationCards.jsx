import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Gallery from "../../components/ui/Gallery";
import { certificatesItems } from "../../data/certificatesItems";
import useGallery from "../../hook/useGallery";

const EducationCards = ({
  img,
  href,
  logo,
  blackLogo,
  title,
  span,
  description,
  num,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { isGalleryOpen, initialIndex, openGallery, closeGallery } =
    useGallery();

  return (
    <AnimatedComponent animation="slide" direction="up" delay={1}>
      <div className="certificates__card flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-600 pb-5 px-3">
        <div className="flex flex-col md:flex-row items-center gap-6 md:w-10/12">
          <a
            className="w-20 min-w-20 hidden md:block"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full cover"
              src={blackLogo && theme !== "dark" ? blackLogo : logo}
              title={t("sections.certifications.url")}
              alt={`Logo de ${span}`}
              loading="lazy"
            />
          </a>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <p
              className={`md:text-sm w-11/12 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="font-bold text-accent">{span}</span> -{" "}
              {description}.
            </p>
          </div>
        </div>

        <figure
          className="cursor-pointer -order-1 md:order-none md:max-w-24 lg:max-w-32"
          onClick={() => openGallery(num)}
        >
          <img
            src={img}
            className="lg:w-32"
            title={t("sections.certifications.img")}
            alt={`Certificado de ${title}`}
            loading="lazy"
          />
        </figure>

        <Gallery
          images={certificatesItems}
          initialIndex={initialIndex}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
        />
      </div>
    </AnimatedComponent>
  );
};

export default EducationCards;
