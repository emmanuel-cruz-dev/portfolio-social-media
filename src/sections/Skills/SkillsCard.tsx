import { FC } from "react";
import { SkillsCardProps } from "src/types/types";

const SkillsCard: FC<SkillsCardProps> = ({ src, alt, title }) => {
  return (
    <div className="card">
      <img
        src={src}
        alt={`${alt} logo`}
        title={title}
        loading="lazy"
        className="w-16 hover:scale-110 transition-transform duration-300"
      />
      <p className="font-semibold">{alt}</p>
    </div>
  );
};

export default SkillsCard;
