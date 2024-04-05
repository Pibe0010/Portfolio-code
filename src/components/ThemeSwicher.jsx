import { ThemeContext } from "../Context/ThemeContext.jsx";
import { useContext } from "react";
import { Icons } from "./Icons.jsx";

export const ThemeSwicher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button className="mode" onClick={() => setTheme(!theme)}>
      {theme ? (
        <Icons id="dark" name="mode_night" />
      ) : (
        <Icons id="light" name="light_mode" />
      )}
    </button>
  );
};
