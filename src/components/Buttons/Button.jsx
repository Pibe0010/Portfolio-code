import "./Button.css";

export const Button = ({ type, className, children }) => {
  return (
    <button type={type} className={`button ${className}`}>
      {children}
    </button>
  );
};
