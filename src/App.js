import React, { useState, useEffect } from "react";
import Bathtub from "./components/Bathtub";
import "./styles/App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [filling, setFilling] = useState(false);
  const [draining, setDraining] = useState(false);

  useEffect(() => {
    if (waterLevel === 5) setFilling(false);
    if (waterLevel === 0) setDraining(false);
  }, [waterLevel]);

  const handleFill = () => {
    setDraining(false);
    if (filling || waterLevel === 5) return;
    clearExistingTimeouts();

    setFilling(true);

    let ct = 1;
    for (let i = waterLevel; i < 5; i++) {
      setTimeout(() => {
        setWaterLevel((level) => level + 1);
      }, 2000 * ct++);
    }
    return;
  };

  const handleDrain = () => {
    setFilling(false);
    if (draining || waterLevel === 0) return;
    clearExistingTimeouts();
    setDraining(true);

    let ct = 1;
    for (let i = waterLevel; i > 0; i--) {
      setTimeout(() => {
        setWaterLevel((level) => level - 1);
      }, 2000 * ct++);
    }
    return;
  };

  const clearExistingTimeouts = () => {
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  };

  return (
    <div className="App">
      <div className="App__header">
        <h2>Water Level: {waterLevel * 20}px</h2>
        <div className="App__headerButtons">
          <button
            onClick={handleFill}
            style={{ backgroundColor: filling ? "grey" : "white" }}
          >
            Fill
          </button>
          <button
            onClick={handleDrain}
            style={{ backgroundColor: draining ? "grey" : "white" }}
          >
            Drain
          </button>
        </div>
      </div>
      <Bathtub waterLevel={waterLevel} filling={filling} />
    </div>
  );
}

export default App;
