import styles from "@components/Main/Main.module.css";
import Nav from "../Nav/Nav";
import CenterBlock from "../CenterBlock/CenterBlock";
import SideBar from "../SideBar/SideBar";
import Bar from "../Bar/Bar";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <SideBar />
      </main >
      <Bar />
      <footer className={styles.footer}></footer>
    </>
  )
}