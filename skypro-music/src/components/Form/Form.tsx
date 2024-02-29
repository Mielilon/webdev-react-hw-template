import styles from "./Form.module.css";

type Form = {
  children: any
}

export default function Form({ children }: Form) {
  return <div className={styles.modalForm}>{children}</div>;
}