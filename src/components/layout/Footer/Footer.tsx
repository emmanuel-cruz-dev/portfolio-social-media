import { useTranslation } from "react-i18next";
import Logro from "../../../assets/icons/logro.png";
import LogoBlanco from "../../../assets/icons/logo-blanco.png";
import freeCodeCampLogo from "../../../assets/images/freecodecamp-logo.jpg";
import PlatziLogo from "../../../assets/images/platzi-logo.jpg";
import FoodieLogo from "../../../assets/images/foodie-logo.jpg";
import BaristasLogo from "../../../assets/images/baristas-logo.jpg";
import SocialLinks from "../../ui/SocialLinks";
import AnimatedComponent from "../../ui/AnimatedComponent";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer text-white select-none" id="contact">
      <article className="flex flex-col lg:flex-row gap-10 justify-between xl:justify-evenly items-center py-20 p-16 border-b border-gray-600">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 w-44">
            <img
              className="w-24"
              src={LogoBlanco}
              alt="Logo de Emmanuel Cruz,el cual es una letra e entre corchetes"
              loading="lazy"
            />
            <p className="text-sm whitespace-nowrap">
              &quot;{t("footer.phrase")}.&quot;
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12">
          <div className="recommendations footer__item flex flex-col gap-4">
            <h3 className="footer__title">{t("footer.channels")}</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@Platzi"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img src={PlatziLogo} alt="Logo de Platzi" loading="lazy" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Platzi</h4>
                <p className="footer__paragraph">{t("footer.platzi")}.</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@freecodecampes"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img
                  src={freeCodeCampLogo}
                  alt="Logo de freeCodeCamp"
                  loading="lazy"
                />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>freeCodeCamp Español</h4>
                <p className="footer__paragraph">{t("footer.freecodecamp")}.</p>
              </div>
            </a>
          </div>

          <div className="latest-projects footer__item flex flex-col gap-4">
            <h3 className="footer__title">{t("footer.projects")}</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emmanuel-cruz-dev.github.io/foodie/"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img src={FoodieLogo} alt="Logo de Foodie" loading="lazy" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Foodie</h4>
                <p className="footer__paragraph">{t("footer.foodie")}.</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emmanuel-cruz-dev.github.io/baristas/"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img src={BaristasLogo} alt="Logo de Baristas" loading="lazy" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Baristas</h4>
                <p className="footer__paragraph">{t("footer.baristas")}.</p>
              </div>
            </a>
          </div>

          <AnimatedComponent animation="scale" delay={6}>
            <div className="achievements footer__item flex flex-col gap-4 h-full max-w-56">
              <h3 className="footer__title">{t("footer.award")}</h3>

              <p className="footer__paragraph">
                {t("footer.congratulations")}{" "}
                <span className="font-semibold italic capitalize text-white">
                  {t("footer.rank")}
                </span>{" "}
                {t("footer.thanks")}
              </p>

              <AnimatedComponent animation="slide" direction="up" delay={9}>
                <img
                  className="w-14 mx-auto"
                  src={Logro}
                  alt="Icono de premio, se ve una mano sosteniendo una medalla."
                  loading="lazy"
                />
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </div>
      </article>

      <article className="flex justify-center items-center p-8 uppercase text-xs">
        <div className="flex flex-col gap-8 md:gap-4">
          <ul className="footer__list flex flex-col md:flex-row text-center justify-center gap-6 font-semibold">
            <li>
              <a href="#hero">{t("navbar.home")}</a>
            </li>
            <li>
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#projects">{t("navbar.projects")}</a>
            </li>
            <li>
              <a href="#skills">{t("navbar.skills")}</a>
            </li>
          </ul>
          <AnimatedComponent animation="fade" delay={0}>
            <p className="footer__link text-center text-slate-400">
              © 2024 · {t("footer.paragraph")} Emmanuel Cruz · Buenos Aires,
              Argentina
            </p>
          </AnimatedComponent>
        </div>
      </article>
    </footer>
  );
}

export default Footer;
