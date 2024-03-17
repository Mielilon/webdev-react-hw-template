import Image from "next/image";
import styles from "@components/SideBar/SideBar.module.css"
import classNames from "classnames";

export default function SideBar() {
    return (
        <div className={classNames(styles.mainSidebar, styles.sidebar)}>
            <div className="{styles.sidebarPersonal}">
                <p className="{styles.sidebarPersonalName}">Sergey.Ivanov</p>
                <div className="{styles.sidebarIcon}">
                    <svg>
                        <use href="/image/icon/sprite.svg#logout"></use>
                    </svg>
                </div>
            </div>
            <div className={styles.sidebarBlock}>
                <div className={styles.sidebarList}>
                    <div className={styles.sidebarItem}>
                        <a className={styles.sidebarLink} href="#">
                            <Image
                                className={styles.sidebarImage}
                                src="/image/playlist01.png"
                                alt="day's playlist"
                                width={250}
                                height={150}
                            />
                        </a>
                    </div>
                    <div className={styles.sidebarItem}>
                        <a className={styles.sidebarLink} href="#">
                            <Image
                                className={styles.sidebarImage}
                                src="/image/playlist02.png"
                                alt="day's playlist"
                                width={250}
                                height={150}
                            />
                        </a>
                    </div>
                    <div className={styles.sidebarItem}>
                        <a className={styles.sidebarLink} href="#">
                            <Image
                                className={styles.sidebarImage}
                                src="/image/playlist03.png"
                                alt="day's playlist"
                                width={250}
                                height={150}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}