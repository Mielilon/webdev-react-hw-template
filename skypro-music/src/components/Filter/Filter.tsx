import classNames from "classnames";
import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles.btnText)}>
          исполнителю
        </div>
        <div className={classNames(styles.filterButton, styles.btnText)}>
          году выпуска
        </div>
        <div className={classNames(styles.filterButton, styles.btnText)}>жанру</div>
      </div>
  )
}