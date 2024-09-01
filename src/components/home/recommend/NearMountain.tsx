"use client";

import styles from "./Recommend.module.css";
import { useRouter } from 'next/navigation';

export default function NearMountain() {
    const route = useRouter();

    const routeView = () => {
        route.push("/view");
    }

    const images = [
        "https://img.freepik.com/free-photo/beautiful-landscape-of-ukrainian-carpathian-mountains-and-cloudy-sky_176420-7166.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/beautiful-shot-of-high-white-hilltops-and-mountains-covered-in-fog_181624-399.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/mountain-landscape-and-skyline_1388-258.jpg?size=626&ext=jpg"
    ]

    return <>
        <div className={styles.container} onClick={routeView}>
            <div className={styles["near-font"]}>
                내 주변엔 무슨 산이 있을까?
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