import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import EmailCopyButton from "./EmailCopyButton";
import SocialLinks from "./SocialLinks";
import AnimatedComponent from "./AnimatedComponent";

function Links() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <article className="flex flex-col gap-5 md:gap-10">
      <AnimatedComponent delay={2} animation="slide" direction="left">
        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          } md:max-w-[30rem] text-md lg:text-lg`}
        >
          {t("sections.hero.description")}.
        </p>
      </AnimatedComponent>
      <AnimatedComponent delay={3} animation="slide" direction="up">
        <div className="flex flex-col gap-8">
          <SocialLinks />
          <div className="flex gap-2 md:gap-4">
            <EmailCopyButton />
          </div>
        </div>
      </AnimatedComponent>
    </article>
  );
}

export default Links;
