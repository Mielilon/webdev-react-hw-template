import styles from "./MainSlideBar.module.css"
import classNames from "classnames";
import Image from "next/image";

export default function MainSlideBar() {
  return (
    <div className={classNames(styles.mainSidebar, styles.sidebar)}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}></p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use href="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImage}
                src="/img/playlist01.png"
                alt="Плейлист дня"
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImage}
                src="/img/playlist02.png"
                alt="Плейлист дня"
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImage}
                src="/img/playlist03.png"
                alt="Плейлист дня"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
