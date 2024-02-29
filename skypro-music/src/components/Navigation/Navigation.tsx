import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import styles from "../Navigation/Navigation.module.css"

export default function Navigation() {
  return (
    <nav className={styles.mainNav}>
      <Logo />
      <Burger />
      <Menu />
    </nav>
  )
}