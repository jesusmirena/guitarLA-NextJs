import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Image src="/img/logo.svg" alt={"logo image"} width={300} height={40} />
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
