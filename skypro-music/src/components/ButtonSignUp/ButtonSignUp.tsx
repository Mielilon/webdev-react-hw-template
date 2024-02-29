import styles from "./ButtonSignUp.module.css"

type ButtonSignUp = {
  text: string;
};

export default function ButtonSignUp({text} : ButtonSignUp) {
  return (
    <button className={styles.modalBtnSignup}>
      <a href="../signup.html">{text}</a>
    </button>
  )
}