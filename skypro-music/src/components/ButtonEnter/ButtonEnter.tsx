import styles from "./ButtonEnter.module.css"

type ButtonEnter = {
  text: string;
};

export default function ButtonEnter({text} : ButtonEnter) {
  return (
    <button className={styles.modalBtnEnter}>
      <a href="../index.html">{text}</a>
    </button>
  )
}