import {IPresenterProps} from "../IPresenterProps";
import {View} from "../components/View";

export const Gallery: React.FC<IPresenterProps> = ({sims}) => {
    return (
        <>
            {sims.map((sim) => (
                <View content={sim.getView()} key={sim.id}/>
            ))}
        </>
    )
}
