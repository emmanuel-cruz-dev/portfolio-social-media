import Platzi from "../assets/icons/platzi.png";
import freeCodeCamp from "../assets/icons/freecodecamp.png";
import freeCodeCampNegro from "../assets/icons/freecodecamp-negro.png";
import AcademiaBANegro from "../assets/icons/academiaba-negro.png";
import AcademiaBA from "../assets/icons/academiaba.png";
import Nucba from "../assets/icons/nucba.png";
import NucbaNegro from "../assets/icons/nucba-negro.png";

import PlatziTitulo from "../assets/images/platzi-mini.jpg";
import freeCodeCampJavascript from "../assets/images/freecodecamp-javascript-mini.jpg";
import freeCodeCampResponsive from "../assets/images/freecodecamp-responsive-mini.jpg";
import HTMLCSSTitulo from "../assets/images/html-css-mini.jpg";
import UXResearchTitulo from "../assets/images/ux-research-mini.jpg";
import NucbaTitulo from "../assets/images/nucba-mini.jpg";

export const educationCertificates = (t) => [
  {
    id: 1,
    img: PlatziTitulo,
    href: "https://platzi.com",
    logo: Platzi,
    title: "Programación Básica",
    span: "Platzi",
    description: t("sections.certifications.platzi"),
    num: "0",
  },
  {
    id: 2,
    img: freeCodeCampJavascript,
    href: "https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures-v8/",
    logo: freeCodeCamp,
    blackLogo: freeCodeCampNegro,
    title: "JavaScript Algorithms and Data Structures",
    span: "freeCodeCamp",
    description: t("sections.certifications.javascript"),
    num: "1",
  },
  {
    id: 3,
    img: freeCodeCampResponsive,
    href: "https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/",
    logo: freeCodeCamp,
    blackLogo: freeCodeCampNegro,
    title: "Responsive Web Design",
    span: "freeCodeCamp",
    description: t("sections.certifications.responsive"),
    num: "2",
  },
  {
    id: 4,
    img: HTMLCSSTitulo,
    href: "https://academiaba.buenosaires.gob.ar/",
    logo: AcademiaBA,
    blackLogo: AcademiaBANegro,
    title: "HTML Y CSS AVANZADO",
    span: "Academia BA Emprende",
    description: t("sections.certifications.htmlcss"),
    num: "3",
  },
  {
    id: 5,
    img: UXResearchTitulo,
    href: "https://academiaba.buenosaires.gob.ar/",
    logo: AcademiaBA,
    blackLogo: AcademiaBANegro,
    title: "UX Research",
    span: "Academia BA Emprende",
    description: t("sections.certifications.uxresearch"),
    num: "4",
  },
  {
    id: 6,
    img: NucbaTitulo,
    href: "https://www.nucba.com.ar/",
    logo: Nucba,
    blackLogo: NucbaNegro,
    title: "HERRAMIENTAS IA Y NO-CODE",
    span: "Nucba",
    description: t("sections.certifications.nucba"),
    num: "5",
  },
];
