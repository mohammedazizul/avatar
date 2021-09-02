import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing/Routing";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
