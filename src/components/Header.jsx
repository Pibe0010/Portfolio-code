import { useEffect, useState } from "react";
import { MenuNavLink } from "./MenuNavLink.jsx";
import { ThemeSwitcher } from "./ui/ThemeSwitcher.jsx";
import { SocialNetworksPage } from "../Pages/SocialNetworksPage.jsx";
import logo from "../assets/4913181.png";
import { MenuHamburger } from "./MenuHamburger.jsx";
import "./Header.css";

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
      <a href="/" className="header__logo">
        <img className="logo" src={logo} alt="logo" />
      </a>
      
      <div className="header__right">
        <MenuHamburger className={`hamburger ${addMenuOpen}`} onClick={openMenuToggle} />
        
        <nav className={`nav ${addClassMenu}`} id="nav">
          <ul className="navList">
            <MenuNavLink name="Home" url="/" menuClose={openMenuToggle} />
            <MenuNavLink name="About" url="/about" menuClose={openMenuToggle} />
            <MenuNavLink name="Projects" url="/proyects" menuClose={openMenuToggle} />
            <MenuNavLink name="Certificates" url="/serticated" menuClose={openMenuToggle} />
            <li className="nav-social">
              <SocialNetworksPage />
            </li>
            <li className="nav-theme">
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;