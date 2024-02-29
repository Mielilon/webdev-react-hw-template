'use client'
import Link from "next/link";
import styles from "./ButtonSignUp.module.css"
import { useRouter } from "next/navigation";

type ButtonSignUp = {
  text: string;
};

export default function ButtonSignUp({ text }: ButtonSignUp) {
  const router = useRouter()

  return (
    <button className={styles.modalBtnSignup} onClick={() => router.push('/signup')}>
      {text}
    </button >
  )
}