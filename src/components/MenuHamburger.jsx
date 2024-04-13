import "./MenuHamburger.css";

export const MenuHamburger = ({ className, onClick }) => {
  return (
    <label className="container">
      <input
        className={`hamburger ${className}`}
        onClick={onClick}
        type="checkbox"
      />
      <div className="checkmark">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  );
};
