import React from "react";
import "../styles/Bathtub.css";

function Bathtub({ waterLevel, filling }) {
  // "Fouset" is a blue div that appears under the fouset when bathtub is being filled
  // "WaterContainer" renders {waterLevel} amount of "Water" divs

  return (
    <div className="Bathtub">
      <div
        className="Fouset"
        style={{
          backgroundColor: filling ? "rgb(46, 179, 255)" : "white",
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
  );
}

export default Bathtub;
