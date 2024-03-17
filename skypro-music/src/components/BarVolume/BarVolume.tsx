import classNames from "classnames";
import styles from "@components/BarVolume/BarVolume.module.css";

export default function BarVolume() {
    return (
        <div className={classNames(styles.barVolumeBlock, styles.volume)}>
            <div className={styles.volumeContent}>
                <div className={styles.volumeImage}>
                    <svg className={styles.volumeSvg}>
                        <use href="/image/icon/sprite.svg#icon-volume"></use>
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
    )
}