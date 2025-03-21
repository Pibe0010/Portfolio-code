import { useEffect, useState } from "react";
import { MenuNavLink } from "./MenuNavLink.jsx";
import { ThemeSwicher } from "./ThemeSwicher.jsx";
import { SocialNetworksPage } from "../Pages/SocialNetworksPage.jsx";
import logo from "../assets/4913181.png";
import { MenuHamburger } from "./MenuHamburger.jsx";
import "./StyleComponents/Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1026);

  const openMenuToggle = () => {
    setMenuOpen((old) => !old);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1026);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen, isMobile]);

  const addClassMenu = menuOpen ? "visible" : "";
  const addMenuOpen = menuOpen ? "openMenu" : "";

  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <MenuHamburger className={`closeMenu ${addMenuOpen}`} onClick={openMenuToggle} />
      <nav className={`nav ${addClassMenu}`} id="nav">
        <ul className="navList">
          <MenuNavLink name="Home" url="/" menuClose={openMenuToggle} />
          <MenuNavLink name="About" url="/about" menuClose={openMenuToggle} />
          <MenuNavLink name="Projects" url="/proyects" menuClose={openMenuToggle} />
          <MenuNavLink name="Securities" url="/serticated" menuClose={openMenuToggle} />
          <SocialNetworksPage />
          <ThemeSwicher />
        </ul>
      </nav>
    </header>
  );
};
