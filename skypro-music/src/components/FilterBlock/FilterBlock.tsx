import classNames from "classnames";
import styles from "@components/FilterBlock/FilterBlock.module.css"

export default function FilterBlock() {
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