import { NavLink } from "react-router-dom";
import styles from "./HeaderLink.module.css";


const HeaderLink = ({ url, children }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link
      }
    >
      {children}
    </NavLink>
  );
};

export default HeaderLink;
