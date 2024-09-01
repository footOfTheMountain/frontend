"use client"
import { useRouter } from 'next/navigation';
import styles from '../MobileLayout.module.css';

const LayoutHeader = () => {
    const route = useRouter();

    const routeMainPage = () => {
        route.push("/");
    }

    const routeUserPage = () => {
        route.push("/user");
    }

    return (
        <header className={styles.header}>
            <a className={styles.title} onClick={routeMainPage}>Logo</a>
            <a className={styles.userIcon} onClick={routeUserPage}>👤</a>
        </header>
    )
}

export default LayoutHeader;