import { Playlist } from "../Playlist"
import playlist01 from "../../../public/img/playlist01.png"
import playlist02 from "../../../public/img/playlist02.png"
import playlist03 from "../../../public/img/playlist03.png"
import styles from "../Sidebar/Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <Playlist src={playlist01} alt="day's playlist" />
          <Playlist src={playlist02} alt="100 dance hits" />
          <Playlist src={playlist03} alt="indi music playlist" />
        </div>
      </div>
    </div>
  )
}