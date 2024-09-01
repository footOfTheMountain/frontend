"use client";

import styles from "./Recommend.module.css";
import { useRouter } from 'next/navigation';

export default function RecommendMountain() {
    const route = useRouter();

    const routeRecommend = () => {
        route.push("/recommend");
    }

    const images = [
        "https://img.freepik.com/free-photo/beautiful-landscape-of-ukrainian-carpathian-mountains-and-cloudy-sky_176420-7166.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/beautiful-shot-of-high-white-hilltops-and-mountains-covered-in-fog_181624-399.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/mountain-landscape-and-skyline_1388-258.jpg?size=626&ext=jpg"
    ]

    return <>
        <div className={styles.container} onClick={routeRecommend}>
            <div className={styles["recommend-font"]}>
                요즘 가장 핫한 등산코스는?
            </div>
            <div className={styles.picture}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={styles["mountain-image"]}
                    />
                ))}
            </div>
        </div>
    </>
}