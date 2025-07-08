import { useTheme } from "../../context/ThemeContext";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTranslation } from "react-i18next";

import ReactLogo from "../../assets/icons/react-logo.png";
import AngularLogo from "../../assets/icons/angular-logo.png";
import NodeLogo from "../../assets/icons/nodejs-logo.png";
import ExpressLogo from "../../assets/icons/express-logo.png";
import ExpressNegroLogo from "../../assets/icons/express-negro-logo.png";
import SassLogo from "../../assets/icons/sass-logo.png";
import GitLogo from "../../assets/icons/git-logo.png";

import TailwindLogo from "../../assets/icons/tailwindcss-logo.png";
import BootstrapLogo from "../../assets/icons/bootstrap-logo.png";

import VsCodeLogo from "../../assets/icons/vscode-logo.png";
import GithubLogo from "../../assets/icons/github-logo.png";

import FigmaLogo from "../../assets/icons/figma-logo.png";
import PhotoshopLogo from "../../assets/icons/photoshop-logo.png";
import WebflowLogo from "../../assets/icons/webflow-logo.png";

import JiraLogo from "../../assets/icons/jira-logo.png";
import ClickUpLogo from "../../assets/icons/clickup-logo.png";
import NotionLogo from "../../assets/icons/notion-logo.png";
import TrelloLogo from "../../assets/icons/trello-logo.png";
import SkillsCard from "./SkillsCard";
import { getWebSkills } from "../../data/skills";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const webSkills = getWebSkills(t);

  return (
    <main className="scroll-top py-10 w-10/12 mx-auto select-none" id="skills">
      <section className="flex flex-col gap-8">
        <AnimatedComponent animation="fade" delay={1}>
          <div className="text-center mb-5">
            <h2 className="font-bold text-3xl mb-4">
              {t("sections.skills.title")}
            </h2>
            <h3 className="text-lg">{t("sections.skills.description")}</h3>
          </div>
        </AnimatedComponent>
        <article className="flex justify-center items-center flex-wrap gap-8">
          {/* Desarrollo Web */}
          <article
            className={`${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } flex flex-col gap-8 items-center w-fit text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
          >
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle1")}
            </h4>
            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              {webSkills.map((skill, index) => (
                <SkillsCard key={index} {...skill} />
              ))}
            </article>
          </article>

          {/* Herramientas de Desarrollo */}
          <article
            className={` ${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
          >
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle3")}
            </h4>
            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              <SkillsCard
                title={t("sections.skills.vscode")}
                src={VsCodeLogo}
                alt="VS Code"
              />

              <SkillsCard
                title={t("sections.skills.git")}
                src={GitLogo}
                alt="Git"
              />

              <SkillsCard
                title={t("sections.skills.github")}
                src={GithubLogo}
                alt="GitHub"
              />
            </article>
          </article>

          {/* Frameworks y Bibliotecas */}
          <article
            className={`${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
          >
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle2")}
            </h4>

            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              <SkillsCard
                title={t("sections.skills.react")}
                src={ReactLogo}
                alt="React"
              />

              <SkillsCard
                title={t("sections.skills.angular")}
                src={AngularLogo}
                alt="Angular"
              />

              <SkillsCard
                title={t("sections.skills.sass")}
                src={SassLogo}
                alt="Sass"
              />

              <SkillsCard
                title={t("sections.skills.tailwind")}
                src={TailwindLogo}
                alt="Tailwind CSS"
              />

              <SkillsCard
                title={t("sections.skills.bootstrap")}
                src={BootstrapLogo}
                alt="Bootstrap"
              />

              <SkillsCard
                title={t("sections.skills.nodejs")}
                src={NodeLogo}
                alt="Node.js"
              />

              <SkillsCard
                title={t("sections.skills.express")}
                src={`${theme === "dark" ? ExpressLogo : ExpressNegroLogo}`}
                alt="Express"
              />
            </article>
          </article>

          {/* Diseño y Prototipado */}
          <article
            className={`${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
          >
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle4")}
            </h4>
            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              <SkillsCard
                title={t("sections.skills.figma")}
                src={FigmaLogo}
                alt="Figma"
              />

              <SkillsCard
                title={t("sections.skills.photoshop")}
                src={PhotoshopLogo}
                alt="Photoshop"
              />

              <SkillsCard
                title={t("sections.skills.webflow")}
                src={WebflowLogo}
                alt="Webflow"
              />
            </article>
          </article>

          {/* Gestión de Proyectos */}
          <article
            className={`${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
          >
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle5")}
            </h4>
            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              <SkillsCard
                title={t("sections.skills.jira")}
                src={JiraLogo}
                alt="Jira"
              />

              <SkillsCard
                title={t("sections.skills.clickUp")}
                src={ClickUpLogo}
                alt="ClickUp"
              />

              <SkillsCard
                title={t("sections.skills.notion")}
                src={NotionLogo}
                alt="Notion"
              />

              <SkillsCard
                title={t("sections.skills.trello")}
                src={TrelloLogo}
                alt="Trello"
              />
            </article>
          </article>
        </article>
      </section>
    </main>
  );
}

export default Skills;
