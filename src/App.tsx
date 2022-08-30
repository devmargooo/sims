import "./index.css";
import {SimsGallery} from "./sims/SimsGallery/SimsGallery";
import {
  Routes,
  Route,
} from "react-router-dom";
import { GamePlanView } from "./sims/pages/GamePlan/GamePlanView";

export default function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<GamePlanView/>}/>
          <Route path="/gallery" element={<SimsGallery/>}/>
        </Routes>
      </div>
    );
}
