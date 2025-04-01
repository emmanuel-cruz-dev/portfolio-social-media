import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTranslation } from "react-i18next";
import EducationCards from "./EducationCards";
import { educationCertificates } from "../../data/educationCertificates";

function Education() {
  const { t } = useTranslation();
  const certificates = educationCertificates(t);

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="certifications"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.certifications.title")}
          </h2>
          <h3 className="text-lg">
            {t("sections.certifications.description")}.
          </h3>
        </div>
      </AnimatedComponent>
      <article className="flex flex-col gap-6 xl:w-10/12 mx-auto">
        {certificates.map((certificate) => (
          <EducationCards key={certificate.id} {...certificate} />
        ))}
      </article>
    </section>
  );
}

export default Education;
