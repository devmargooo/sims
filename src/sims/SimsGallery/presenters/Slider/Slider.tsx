import {IPresenterProps} from "../IPresenterProps";
import {useState} from "react";
import {ISim} from "../../../Sims";
import {View} from "../components/View";
import styles from "./Slider.module.css";
import cn from "classnames";

const left = "<";
const right = ">"

export const Slider:React.FC<IPresenterProps> = ({sims}) => {
    const [index, setIndex] = useState<number>(0);
    const isLeftArrowDisabled = index <= 0;
    const isRightArrowDisabled = index >= sims.length - 1;
    const sim = sims[index];

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={cn(styles.arrow, isLeftArrowDisabled && styles.disabled)}
                onClick={() => setIndex(index - 1)}
                disabled={isLeftArrowDisabled}
            >
                {left}
            </button>
            <View content={sim.getView()} key={sim.id}/>
            <button
                disabled={isRightArrowDisabled}
                type="button"
                className={cn(styles.arrow, isRightArrowDisabled && styles.disabled)}
                onClick={() =>setIndex(index + 1)}
            >
                {right}
            </button>
        </div>
    )
}
