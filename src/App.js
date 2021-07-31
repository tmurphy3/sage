import React, { useState } from "react";
import Bathtub from "./components/Bathtub";
import "./styles/App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(0);

  const handleFill = () => {
    if (waterLevel === 5) return;
    setWaterLevel((level) => level + 1);
    return;
  };

  const handleDrain = () => {
    if (waterLevel === 0) return;
    setWaterLevel((level) => level - 1);
    return;
  };

  return (
    <div className="App">
      <div className="App__header">
        <h2>Water Level: {waterLevel}</h2>
        <div className="App__headerButtons">
          <button onClick={handleFill}>Fill</button>
          <button onClick={handleDrain}>Drain</button>
        </div>
      </div>
      <Bathtub waterLevel={waterLevel} />
    </div>
  );
}

export default App;
