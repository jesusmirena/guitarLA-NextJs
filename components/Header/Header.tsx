import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routes } from "../../constants";

import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt={"logo image"}
            width={300}
            height={40}
          />
        </Link>
        <nav className={styles.navigation}>
          {routes.map((route) => (
            <Link
              className={router.pathname === route.href ? styles.active : ""}
              href={route.href}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
