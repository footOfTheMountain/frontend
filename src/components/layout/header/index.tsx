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
            <img
                src="https://media.istockphoto.com/id/1560191229/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EA%B0%88%EC%83%89-%EA%B3%B0.jpg?s=1024x1024&w=is&k=20&c=TIU3UEb1H4uW2msTNevcJDmVtixG5AsJ_XK4dbJ6vvU="
                className={styles.title}
                onClick={routeMainPage}>
            </img>
            <a className={styles.userIcon} onClick={routeUserPage}>👤</a>
        </header>
    )
}

export default LayoutHeader;