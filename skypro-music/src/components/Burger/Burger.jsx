import styles from "../Burger/Burger.module.css"

export default function Burger() {
  return (
    <div className={styles.navBurger}>
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </div>
  );
}
