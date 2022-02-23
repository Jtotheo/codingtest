import "./App.css";
import { Master } from "./components/Master";

import { BrowserRouter as Router } from "react-router-dom";
import "@ionic/react/css/core.css";

function App() {
  // "Master" skickas från "App" till "index.js", här lagd i Reacts "BrowserRouter"
  return (
    <Router>
      <div className="App">
        <Master />
      </div>
    </Router>
  );
}

export default App;
