import React from "react";
import "../styles/Bathtub.css";

function Bathtub({ waterLevel }) {
  return (
    <div className="Bathtub">
      <div className="Fouset" />
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
