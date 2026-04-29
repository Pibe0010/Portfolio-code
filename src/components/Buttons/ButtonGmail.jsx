import './ButtonGmail.css';

export const ButtonGmail = ({ className, type, children }) => {
  const openGmail = () => {
    window.open("https://mail.google.com", "_blank");
  };
  return (
    <button type={type} className={`button-gmail ${className || ''}`} onClick={openGmail}>
      {children}
    </button>
  );
};