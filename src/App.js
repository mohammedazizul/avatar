import { Container } from "react-bootstrap";
import "./App.css";
import Dynamic from "./components/Dynamic/Dynamic";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Dynamic />
      </Container>
    </div>
  );
}

export default App;
