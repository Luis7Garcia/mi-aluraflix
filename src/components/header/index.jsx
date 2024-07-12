import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/LogoMain.png";
import HeaderLink from "../headerLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Alura" />
        </section>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <HeaderLink url="./">HOME</HeaderLink>
          <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
