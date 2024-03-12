import styles from "./FormWrapper.module.css";

export default function FormWrapper({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerEnter}>
                <div className={styles.modalBlock}>
                    <form className={styles.modalFormLogin} action="#">
                        {children}
                    </form>
                </div>
            </div>
        </div>
    )
}