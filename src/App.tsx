import "./index.css";
import {SimsGallery} from "./sims/SimsGallery/SimsGallery";
import {
  Routes,
  Route,
} from "react-router-dom";
import { GamePlanView } from "./sims/pages/GamePlan/GamePlanView";
import {useEffect} from "react";
import {Human, Sim} from "./sims/Sims";
import {apiService} from "./services/apiService";


export default function App() {
    useEffect(() => {
        apiService.get(1).then((data) => console.log(data))
    }, []);
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<GamePlanView/>}/>
          <Route path="/gallery" element={<SimsGallery/>}/>
        </Routes>
      </div>
    );
}
