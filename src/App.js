import "./styles/App.css";
import Bathtub from "./components/Bathtub";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <h2>Water Level</h2>
        <div className="App__headerButtons">
          <button onClick={() => console.log("Fill")}>Fill</button>
          <button onClick={() => console.log("Drain")}>Drain</button>
        </div>
      </div>
      <Bathtub />
    </div>
  );
}

export default App;
