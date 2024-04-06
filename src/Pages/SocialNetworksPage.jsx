import "./SocialNetworks.css";
import { Link } from "react-router-dom";
import github from "../assets/img/Socials/github_git_icon_145985.png";
import linkeding from "../assets/img/Socials/linkedin.png";

export const SocialNetworksPage = () => {
  return (
    <section className="social-container">
      <Link to="https://github.com/Pibe0010">
        <img src={github} alt="logo github" />
      </Link>
      <Link to="https://www.linkedin.com/in/daniel-montero-castro/">
        <img src={linkeding} alt="logo linkedin" />
      </Link>
    </section>
  );
};
