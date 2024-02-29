import Link from "next/link";
import styles from "./ButtonEnter.module.css"

type ButtonEnter = {
  text: string;
};

export default function ButtonEnter({ text }: ButtonEnter) {
  return (
    <button className={styles.modalBtnEnter}>
      <Link href={"/"}>{text}</Link>
    </button>
  )
}