import { Link } from "react-router-dom";

export const MenuNavLink = (props) => {
  const menuClose = props.menuClose;

  return (
    <>
      <li>
        <Link className={props.className} to={props.url} onClick={menuClose}>
          {props.name}
        </Link>
      </li>
    </>
  );
};
