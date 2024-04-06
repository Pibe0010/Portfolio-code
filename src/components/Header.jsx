import "./Header.css";
import { useEffect, useState } from "react";
import { MenuNavLink } from "./MenuNavLink.jsx";
import { ThemeSwicher } from "./ThemeSwicher.jsx";
import { Icons } from "./Icons.jsx";
import { SocialNetworksPage } from "../Pages/SocialNetworksPage.jsx";
import logo from "../assets/4913181.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1026);

  const openMenuToggle = () => {
    setMenuOpen((old) => !old);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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

  return (
    <>
      <header className="header">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>

        <button onClick={openMenuToggle}>
          {menuOpen ? (
            <Icons className="closeMenu" id="close" name="close" />
          ) : (
            <Icons className="openMenu" id="open" name="menu" />
          )}
        </button>
        <nav className={`nav ${addClassMenu}`} id="nav">
          <ul className="navList">
            <MenuNavLink name="INICIO" url="/" menuClose={openMenuToggle} />
            <MenuNavLink
              name="SOBRE MI"
              url="/about"
              menuClose={openMenuToggle}
            />
            <MenuNavLink
              name="PROYECTOS"
              url="/proyects"
              menuClose={openMenuToggle}
            />
            <MenuNavLink
              name="TITULACIÓNES"
              url="/serticated"
              menuClose={openMenuToggle}
            />
            <SocialNetworksPage />
            <ThemeSwicher />
          </ul>
        </nav>
      </header>
    </>
  );
};
