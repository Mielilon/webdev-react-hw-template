import classNames from "classnames";
import styles from "./Filter.module.css";

type FilterType = {
  list: Array<{ id: number, name: string }>;
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function Filter({ list, title, isOpen, onClick }: FilterType) {
  return (
    <>
      <button className={classNames(styles.filterButton, styles.btnText)} onClick={onClick}>
        {title}
      </button>
      {isOpen && (
        <ul>Содержание
          {list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}