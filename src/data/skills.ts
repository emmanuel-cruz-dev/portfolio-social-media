import { TFunction } from "i18next";
import HTMLLogo from "../assets/icons/html-logo.png";
import CSSLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import TypescriptLogo from "../assets/icons/typescript-logo.png";

import ReactLogo from "../assets/icons/react-logo.png";
//import ReactNativeLogo from "../assets/icons/react-native-logo.png";
import AngularLogo from "../assets/icons/angular-logo.png";
import NodeLogo from "../assets/icons/nodejs-logo.png";
import ExpressLogo from "../assets/icons/express-logo.png";
import ExpressLogoNegro from "../assets/icons/express-negro-logo.png";
import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import BootstrapLogo from "../assets/icons/bootstrap-logo.png";

import GitLogo from "../assets/icons/git-logo.png";
import GithubLogo from "../assets/icons/github-logo.png";
import VsCodeLogo from "../assets/icons/vscode-logo.png";
import IntelliJLogo from "../assets/icons/intellij-logo.png";
//import PostmanLogo from "../assets/icons/postman-logo.png";
import InsomniaLogo from "../assets/icons/insomnia-logo.png";

import FigmaLogo from "../assets/icons/figma-logo.png";
import PhotoshopLogo from "../assets/icons/photoshop-logo.png";
import WebflowLogo from "../assets/icons/webflow-logo.png";

import JiraLogo from "../assets/icons/jira-logo.png";
import ClickupLogo from "../assets/icons/clickup-logo.png";
import NotionLogo from "../assets/icons/notion-logo.png";
import TrelloLogo from "../assets/icons/trello-logo.png";

export const getWebSkills = (t: TFunction) => [
  {
    src: HTMLLogo,
    alt: "HTML",
    title: t("sections.skills.html"),
  },
  {
    src: CSSLogo,
    alt: "CSS",
    title: t("sections.skills.css"),
  },
  {
    src: JavascriptLogo,
    alt: "JavaScript",
    title: t("sections.skills.javascript"),
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript",
    title: t("sections.skills.typescript"),
  },
];

export const getFrameworks = (t: TFunction, theme: string) => [
  {
    src: ReactLogo,
    alt: "React",
    title: t("sections.skills.react"),
  },
  // {
  //   src: ReactNativeLogo,
  //   alt: "React Native",
  //   title: t("sections.skills.reactNative"),
  // },
  {
    src: AngularLogo,
    alt: "Angular",
    title: t("sections.skills.angular"),
  },
  {
    src: NodeLogo,
    alt: "Node.js",
    title: t("sections.skills.nodejs"),
  },
  {
    src: theme == "dark" ? ExpressLogo : ExpressLogoNegro,
    alt: "Express",
    title: t("sections.skills.express"),
  },
  {
    src: TailwindLogo,
    alt: "Talwind CSS",
    title: t("sections.skills.tailwind"),
  },
  {
    src: SassLogo,
    alt: "Sass",
    title: t("sections.skills.sass"),
  },
  {
    src: BootstrapLogo,
    alt: "Bootstrap",
    title: t("sections.skills.bootstrap"),
  },
];

export const getDevelopmentTools = (t: TFunction) => [
  {
    src: GitLogo,
    alt: "Git",
    title: t("sections.skills.git"),
  },
  {
    src: GithubLogo,
    alt: "GitHub",
    title: t("sections.skills.github"),
  },
  {
    src: VsCodeLogo,
    alt: "VS Code",
    title: t("sections.skills.vscode"),
  },
  {
    src: IntelliJLogo,
    alt: "IntelliJ IDEA",
    title: t("sections.skills.intelliJ"),
  },
  // {
  //   src: PostmanLogo,
  //   alt: "Postman",
  //   title: t("sections.skills.postman"),
  // },
  {
    src: InsomniaLogo,
    alt: "Insomnia",
    title: t("sections.skills.insomnia"),
  },
];

export const getDesignPrototyping = (t: TFunction) => [
  {
    src: FigmaLogo,
    alt: "Figma",
    title: t("sections.skills.figma"),
  },
  {
    src: PhotoshopLogo,
    alt: "Photoshop",
    title: t("sections.skills.photoshop"),
  },
  {
    src: WebflowLogo,
    alt: "Webflow",
    title: t("sections.skills.webflow"),
  },
];

export const getManageTools = (t: TFunction) => [
  {
    src: JiraLogo,
    alt: "Jira",
    title: t("sections.skills.jira"),
  },
  {
    src: ClickupLogo,
    alt: "ClickUp",
    title: t("sections.skills.clickUp"),
  },
  {
    src: NotionLogo,
    alt: "Notion",
    title: t("sections.skills.notion"),
  },
  {
    src: TrelloLogo,
    alt: "Trello",
    title: t("sections.skills.trello"),
  },
];
