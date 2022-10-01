import {feed} from "../../features/playWithPets";
import {Cat, Tiger, TysonsTiger} from "../Sims";

export const FeedPets:React.FC = () => {
    const cat = new Cat();
    const tiger1 = new Tiger();
    const tiger2 = new TysonsTiger();
    const text = feed(cat);
    const text1 = feed(tiger1);
    const text2 = feed(tiger2);
    return (<div>
        {text} {text1} {text2}
    </div>)
}
