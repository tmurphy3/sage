import React, { useState, useEffect } from "react";
import Bathtub from "./components/Bathtub";
import "./styles/App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(0); // current level of water
  const [filling, setFilling] = useState(false); // is the bathtub currently filling
  const [draining, setDraining] = useState(false); // is the bathtub currently draining

  // every time {waterLevel} changes, check if the bathtub is full or empty
  useEffect(() => {
    if (waterLevel === 5) setFilling(false);
    if (waterLevel === 0) setDraining(false);
  }, [waterLevel]);

  const handleFill = () => {
    if (filling) return; // exit if bathtub is already being filled

    // cancels any ongoing draining
    setDraining(false);
    clearExistingTimeouts();

    if (waterLevel === 5) return; // exit if bathtub is already full
    setFilling(true);

    // will increment {waterLevel} every 2 seconds until {waterLevel} === 5
    let ct = 1;
    for (let i = waterLevel; i < 5; i++) {
      setTimeout(() => {
        setWaterLevel((level) => level + 1);
      }, 2000 * ct++);
    }
    return;
  };

  const handleDrain = () => {
    if (draining) return; // exit if bathtub is already being drained

    // cancels any ongoing filling
    setFilling(false);
    clearExistingTimeouts();

    if (waterLevel === 0) return; // exit if bathtub is already empty

    setDraining(true);

    // will decrement {waterLevel} every 2 seconds until {waterLevel} === 0
    let ct = 1;
    for (let i = waterLevel; i > 0; i--) {
      setTimeout(() => {
        setWaterLevel((level) => level - 1);
      }, 2000 * ct++);
    }
    return;
  };

  // clears all existing timeouts
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
