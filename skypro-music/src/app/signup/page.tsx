import ButtonSignUp from "@/components/ButtonSignUp/ButtonSignUp";
import { Container } from "@/components/Container";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import ModalBlock from "@/components/ModalBlock/ModalBlock";
import { Wrapper } from "@/components/Wrapper";
import styles from "./page.module.css"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import modalLogo from "../../../public/img/logo_modal.png"


export default function SignUp() {
  return (
    <Wrapper>
      <Container>
        <ModalBlock>
          <Form>
            <Link href={"/"}>
            <div className={styles.modalLogo}>
              <Image src={modalLogo} alt="logo" width={140} height={21} />
            </div>
          </Link>
          <Input
            className={classNames(styles.modalInput, styles.login)}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <Input
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <Input
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <ButtonSignUp text="Зарегистрироваться" />
        </Form>
      </ModalBlock>
    </Container>
    </Wrapper >
  )
}