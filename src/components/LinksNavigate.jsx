import { Link } from "react-router-dom";

export const LinksNavigate = ({ className, children, to }) => {
  return (
    <Link to={to} className={`btn ${className}`}>
      {children}
    </Link>
  );
};
