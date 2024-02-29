import Bar from "@/components/Bar/Bar";
import Centerblock from "@/components/Centerblock/Centerblock";
import Container from "@/components/Container/Container";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Wrapper>
        <Container>
          <main className={styles.main}>
           <Navigation />
            <Centerblock />
            <Sidebar />
          </main>
          <Bar />
          <footer className="footer" />
        </Container>
      </Wrapper>
    </>
  );
}
