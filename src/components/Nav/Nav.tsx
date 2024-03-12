import styles from "./Nav.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={classNames(styles.mainNav, styles.nav)}>
      <div className={classNames(styles.navLogo, styles.logo)}>
        <Image
          alt="logo"
          width={113}
          height={17}
          className={styles.logoImage}
          src="/img/logo.png"
        />
      </div>
      <div className={classNames(styles.navBurger, styles.burger)}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={classNames(styles.navMenu, styles.menu)}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>Мои треки</li>
          <li className={styles.menuItem}>
            <Link href="/signin">Выйти</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
