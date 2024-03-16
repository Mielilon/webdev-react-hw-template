import classNames from "classnames";
import styles from "@components/CenterFilter/CenterFilter.module.css"

export default function CenterFilter() {
    return (
        <div className={classNames(styles.centerBlockFilter, styles.filter)}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles.buttonAuthor, styles.btnText)}>
            исполнителю
        </div>
        <div className={classNames(styles.filterButton, styles.buttonYear, styles.btnText)}>
            году выпуска
        </div>
        <div className={classNames(styles.filterButton, styles.buttonGenre, styles.btnText)}>жанру</div>
    </div>
    )
}