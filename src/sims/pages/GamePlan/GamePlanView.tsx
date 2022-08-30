import {useState} from "react";
import {Game, gamePlan} from "./gamePlan";

const initialGameNumber = 0;
const initialResult = "";

export const GamePlanView:React.FC = () => {
    const [gameIndex, setGameIndex] = useState<number>(initialGameNumber);
    const [result, setResult] = useState<string>(initialResult);
    const currentGame: Game = gamePlan[gameIndex];
    const clickHandler = () => {
        setResult(currentGame.action());
        setGameIndex(
            gameIndex >= gamePlan.length - 1 ? initialGameNumber : gameIndex + 1
        );
    };
    return (
        <div>
            <button className="actionButton" type="button" onClick={clickHandler}>
                {currentGame.title}
            </button>
            <div className="result">{result}</div>
        </div>
    )
}
