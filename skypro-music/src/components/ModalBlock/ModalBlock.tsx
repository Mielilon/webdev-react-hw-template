import styles from "./ModalBlock.module.css";

type ModalBlock = {
  children: any
}

export default function ModalBlock({ children }: ModalBlock) {
  return <div className={styles.modalBlock}>{children}</div>;
}