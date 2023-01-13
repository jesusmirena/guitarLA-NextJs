import Link from "next/link";
import { routes } from "../../constants";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          {routes.map((route) => (
            <Link href={route.href}>{route.name}</Link>
          ))}
        </nav>
        <p className={styles.copyright}>
          All rights and lefts reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
