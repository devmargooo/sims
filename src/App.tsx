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
        const sim = new Human({name: 'Kate', gender: "female"});
        apiService.write(sim);
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
