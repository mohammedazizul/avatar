import "./App.css";
import Dynamic from "./components/Dynamic/Dynamic";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Dynamic />
      </div>
    </div>
  );
}

export default App;
