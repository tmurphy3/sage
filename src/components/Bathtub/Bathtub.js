import React, { useState, useRef } from "react";
import "./Bathtub.css";

function Bathtub() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [waterMovement, setWaterMovement] = useState(null); // filling, draining, or null

  // useRef to persist interval and waterLevel across renders without causing rerender
  const intervalRef = useRef();
  const waterLevelRef = useRef(0);

  // when fill or drain buttons are clicked, movementType will be Filling or Draining
  function handleStartMovement(movementType) {
    if (waterMovement === movementType) return; // exit if already filling/draining

    if (
      (movementType === "Filling" && waterLevelRef.current === 5) ||
      (movementType === "Draining" && waterLevelRef.current === 0)
    ) {
      setWaterMovement(null);
      return handleStopMovement();
    }

    handleStopMovement(); // clears any ongoing intervals so only one is going at any given time
    setWaterMovement(movementType);

    const id = setInterval(() => {
      // change waterLevelRef accordingly, and setWaterLevel state
      if (movementType === "Filling") waterLevelRef.current++;
      if (movementType === "Draining") waterLevelRef.current--;
      setWaterLevel(waterLevelRef.current);

      // clear interval if we are filling and reach max level
      // clear interval if we are draining and reach min level
      if (
        (movementType === "Filling" && waterLevelRef.current === 5) ||
        (movementType === "Draining" && waterLevelRef.current === 0)
      ) {
        setWaterMovement(null);
        return clearInterval(intervalRef.current);
      }
    }, 2000);

    intervalRef.current = id;

    return;
  }

  // helper function to clear interval
  function handleStopMovement() {
    return clearInterval(intervalRef.current);
  }

  // "Fouset" is a blue div that appears under the fouset when bathtub is being filled
  // "WaterContainer" renders {waterLevel} amount of "Water" divs

  return (
    <div className="Bathtub__container">
      <div className="Bathtub__header">
        <h2>Water Level: {waterLevel * 20}px</h2>
        <div className="Bathtub__headerButtons">
          <button
            onClick={() => handleStartMovement("Filling")}
            style={{
              backgroundColor: waterMovement === "Filling" ? "grey" : "white",
            }}
          >
            Fill
          </button>
          <button
            onClick={() => handleStartMovement("Draining")}
            style={{
              backgroundColor: waterMovement === "Draining" ? "grey" : "white",
            }}
          >
            Drain
          </button>
          <button
            style={{
              backgroundColor: "white",
            }}
            onClick={() => {
              handleStopMovement();
              setWaterMovement(null);
            }}
          >
            Stop
          </button>
        </div>
      </div>
      <div className="Bathtub">
        <div
          className="Fouset"
          style={{
            backgroundColor:
              waterMovement === "Filling" ? "rgb(46, 179, 255)" : "white",
          }}
        />
        <div className="WaterContainer">
          {Array(waterLevel)
            .fill()
            .map((el, i) => (
              <div key={i} className="Water"></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Bathtub;
