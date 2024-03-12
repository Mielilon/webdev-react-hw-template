import styles from "./BarVolume.module.css";
import classNames from "classnames";

export default function BarVolume() {
  return (
    <div className={classNames(styles.barVolume, styles.volume)}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use href="/img/icon/sprite.svg#iconvolume"></use>
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles._btn)}>
          <input
            className={classNames(styles.volumeProgressLine, styles._btn)}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}
