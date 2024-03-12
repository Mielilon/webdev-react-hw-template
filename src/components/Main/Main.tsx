import styles from "./Main.module.css";
import { Bar } from "@components/Bar";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Nav } from "@components/Nav";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <MainSlideBar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </>
  );
}
