import React from "react";
import "../styles/Bathtub.css";

function Bathtub({ waterLevel, filling }) {
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
