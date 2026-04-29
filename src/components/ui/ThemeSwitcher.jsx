import { ThemeContext } from '../../Context/ThemeContext.jsx';
import { useContext } from 'react';
import './ThemeSwitcher.css';

/**
 * ThemeSwitcher - Animated light/dark theme toggle
 */
export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-switcher"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={`theme-switcher__icon ${theme === 'light' ? 'theme-switcher__icon--sun' : 'theme-switcher__icon--moon'}`}>
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;