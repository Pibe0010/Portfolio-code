import "./SocialNetworks.css";
import { Link } from "react-router-dom";
import { DataSocials } from "../Utils/DataSocials.js";

export const SocialNetworksPage = () => {
  return (
    <section className="social-container">
      {DataSocials.map((social) => {
        return (
          <Link to={social.url} key={social.id}>
            <img src={social.img} alt={social.name} />
          </Link>
        );
      })}
    </section>
  );
};
