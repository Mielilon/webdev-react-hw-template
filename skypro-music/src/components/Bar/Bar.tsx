import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrack from "../PlayerTrack/PlayerTrack";
import Volume from "../Volume/Volume";
import styles from "../Bar/Bar.module.css"

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress} />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls />
            <PlayerTrack />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  )
}