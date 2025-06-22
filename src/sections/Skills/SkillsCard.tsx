import { FC } from "react";
import { SkillsCardProps } from "src/types/types";

const SkillsCard: FC<SkillsCardProps> = ({ src, alt, title }) => {
  return (
    <div className="card group" title={title} aria-label={alt}>
      <img
        src={src}
        alt={`${alt} logo`}
        loading="lazy"
        width={900}
        height={900}
        className="w-16 group-hover:scale-110 transition-transform duration-300"
      />
      <p className="font-semibold">{alt}</p>
    </div>
  );
};

export default SkillsCard;
