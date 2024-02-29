import styles from "./Container.module.css";

type Container = {
  children: any
}

export default function Container({ children }: Container) {
  return <div className={styles.container}>{children}</div>;
}