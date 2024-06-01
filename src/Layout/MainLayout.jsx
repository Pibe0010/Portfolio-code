import { useContext } from "react";
import { Header } from "../components/Header.jsx";
import { ThemeContext } from "../Context/ThemeContext.jsx";

export const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const changeMode = theme ? "dark" : "light";

  return (
    <section className="main_leyaut">
      <Header />
      <main className={`mainContain ${changeMode}`}>{children}</main>
      <footer className="footer"> Copyright © Daniel Montero 2024</footer>
    </section>
  );
};
