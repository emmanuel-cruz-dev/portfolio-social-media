import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import SkillsCard from "./SkillsCard";
import {
  getDesignPrototyping,
  getDevelopmentTools,
  getFrameworks,
  getManageTools,
  getWebSkills,
} from "../../data/skills";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const webSkills = getWebSkills(t);
  const developmentTools = getDevelopmentTools(t);
  const frameworks = getFrameworks(t, theme);
  const designTools = getDesignPrototyping(t);
  const manageTools = getManageTools(t);

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
              {developmentTools.map((tools, index) => (
                <SkillsCard key={index} {...tools} />
              ))}
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
              {frameworks.map((framework, index) => (
                <SkillsCard key={index} {...framework} />
              ))}
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
              {designTools.map((tools, index) => (
                <SkillsCard key={index} {...tools} />
              ))}
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
              {manageTools.map((tool, index) => (
                <SkillsCard key={index} {...tool} />
              ))}
            </article>
          </article>
        </article>
      </section>
    </main>
  );
}

export default Skills;
