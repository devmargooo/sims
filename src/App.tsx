import { useState } from "react";
import "./index.css";
import { Game, gamePlan } from "./gamePlan";
import {ShowList} from "./sims/creationList/CreateListView";
import {SimsGallery} from "./sims/SimsGallery/SimsGallery";

const initialGameNumber = 0;
const initialResult = "";
export default function App() {
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
      <div className="App">
        {/*<button className="actionButton" type="button" onClick={clickHandler}>*/}
        {/*  {currentGame.title}*/}
        {/*</button>*/}
        {/*<div className="result">{result}</div>*/}
        {/*  <ShowList/>*/}
        <SimsGallery/>
      </div>
  );
}
