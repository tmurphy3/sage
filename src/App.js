import "./styles/App.css";

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
    </div>
  );
}

export default App;
