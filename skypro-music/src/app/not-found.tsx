import Link from "next/link";

export default function NotFound(){
    return(
        <>
        <h1>Страница не найдена</h1>
        <Link href="/">Перейти на главную</Link>
        </>
    );
}