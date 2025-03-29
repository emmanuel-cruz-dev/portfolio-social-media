import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <article className="flex gap-4">
      <a
        title="Instagram"
        className="w-7 hover:text-accent hover:scale-105 transition-all duration-500 ease-in-out"
        href="https://www.instagram.com/emmanuel_gerz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="w-full h-full" />
      </a>
      <a
        title="Facebook"
        className="w-7 hover:text-accent hover:scale-105 transition-all duration-500 ease-in-out"
        href="https://www.facebook.com/profile.php?id=100010054865787"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="w-full h-full" />
      </a>
      <a
        title="Linkedin"
        className="w-7 hover:text-accent hover:scale-105 transition-all duration-500 ease-in-out"
        href="https://www.linkedin.com/in/emmanuel-cruz-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-full h-full" />
      </a>

      <a
        title="Email"
        className="w-7 hover:text-accent hover:scale-105 transition-all duration-500 ease-in-out"
        href="mailto:emmanuelgerr@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPaperPlane className="w-full h-full" />
      </a>
    </article>
  );
}

export default SocialLinks;
