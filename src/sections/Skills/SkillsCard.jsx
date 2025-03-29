const SkillsCard = ({ src, alt, title }) => {
  return (
    <div className="card">
      <img
        src={src}
        alt={`${alt} logo`}
        title={title}
        loading="lazy"
        className="w-16 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
      />
      <p className="font-semibold">{alt}</p>
    </div>
  );
};

export default SkillsCard;
