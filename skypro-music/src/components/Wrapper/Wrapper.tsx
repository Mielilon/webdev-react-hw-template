import styles from "./Wrapper.module.css";

type Wrapper = {
  children: any
}

export default function Wrapper({ children }: Wrapper) {
  return <div className={styles.wrapper}>{children}</div>;
}