import styles from "./SimsGallery.module.css";
import {Human, ISim} from "../Sims";
import {useEffect, useState} from "react";
import {View} from "./presenters/components/View";
import {Gallery} from "./presenters/Gallery/Gallery";
import {Slider} from "./presenters/Slider/Slider";

const GALLERY_LENGTH = 5;

function createSims():ISim[] {
    const result:ISim[] = [];
    for (let i = 0; i < GALLERY_LENGTH; i++) {
        result.push(new Human());
    }
    return result;
}

export const SimsGallery:React.FC = () => {
    const [sims, setSims] = useState<ISim[]>([]);
    useEffect(() => {
        setSims(createSims());
    }, []);
    if (!sims.length) {
        return null;
    }
    return (
        <>
            <h1>Choose your fighter</h1>
            <div className={styles.container}>
                <Slider sims={sims}/>
            </div>
        </>
    )

}
