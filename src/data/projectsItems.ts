import CardPollosHermanos1 from "../assets/images/card-pollos-hermanos1.webp";
import CardPollosHermanos2 from "../assets/images/card-pollos-hermanos2.webp";
import CardPollosHermanos3 from "../assets/images/card-pollos-hermanos3.webp";

import CardLockKey1 from "../assets/images/card-lock-key1.webp";
import CardLockKey2 from "../assets/images/card-lock-key2.webp";
import CardLockKey3 from "../assets/images/card-lock-key3.webp";

import CardJinjer1 from "../assets/images/card-jinjer1.webp";
import CardJinjer2 from "../assets/images/card-jinjer2.webp";
import CardJinjer3 from "../assets/images/card-jinjer3.webp";

import CardLiterarium1 from "../assets/images/card-literarium1.webp";
import CardLiterarium2 from "../assets/images/card-literarium2.webp";
import CardLiterarium3 from "../assets/images/card-literarium3.webp";

import HTMLLogo from "../assets/icons/html-logo.png";
import CssLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import TypeScriptLogo from "../assets/icons/typescript-logo.png";
import JqueryLogo from "../assets/icons/jquery-logo.png";
import ReactLogo from "../assets/icons/react-logo.png";
import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import { TFunction } from "i18next";

export const projectsItems = (t: TFunction) => [
  {
    id: 1,
    title: "Los Pollos Hermanos",
    description: t("sections.projects.pollos"),
    img1: CardPollosHermanos1,
    img2: CardPollosHermanos2,
    img3: CardPollosHermanos3,
    flyer: "responsive",
    technologies: [
      { name: "HTML", img: HTMLLogo },
      { name: "CSS", img: CssLogo },
      { name: "Javascript", img: JavascriptLogo },
      { name: "Jquery", img: JqueryLogo },
    ],
    link: "https://emmanuel-cruz-dev.github.io/los-pollos-hermanos-website/",
    github: "https://github.com/emmanuel-cruz-dev/los-pollos-hermanos-website",
  },
  {
    id: 2,
    title: "LockKey | Gestor de Contraseñas",
    description: t("sections.projects.lockKey"),
    img1: CardLockKey1,
    img2: CardLockKey2,
    img3: CardLockKey3,
    flyer: "dark",
    technologies: [
      { name: "React", img: ReactLogo },
      { name: "TypeScript", img: TypeScriptLogo },
      { name: "Tailwind CSS", img: TailwindLogo },
    ],
    link: "https://lock-key.vercel.app/",
    github: "https://github.com/emmanuel-cruz-dev/lockkey-no-country-mvp",
  },
  {
    id: 3,
    title: "Jinjer | Website",
    description: t("sections.projects.jinjer"),
    img1: CardJinjer1,
    img2: CardJinjer2,
    img3: CardJinjer3,
    flyer: "language",
    technologies: [
      { name: "React", img: ReactLogo },
      { name: "TypeScript", img: TypeScriptLogo },
      { name: "Tailwind CSS", img: TailwindLogo },
      { name: "Sass", img: SassLogo },
    ],
    link: "https://jinjer.vercel.app/",
    github: "https://github.com/EmmaLCruz/jinjer",
  },
  {
    id: 4,
    title: "Literarium | Bookstore",
    description: t("sections.projects.literarium"),
    img1: CardLiterarium1,
    img2: CardLiterarium2,
    img3: CardLiterarium3,
    flyer: "responsive",
    technologies: [
      { name: "React", img: ReactLogo },
      { name: "TypeScript", img: TypeScriptLogo },
      { name: "Tailwind CSS", img: TailwindLogo },
    ],
    link: "https://literarium.netlify.app/",
    github: "https://github.com/EmmaLCruz/literarium",
  },
];
