import React from "react";
import robotHead from "../../../assets/robot-head.png";
import cat from "../../../assets/cat.png";
import pin from "../../../assets/pin.png";
import pencil from "../../../assets/pencil.png";
import handPointing from "../../../assets/hand-pointing.png";

const Icon = ({ variant, label, size = 24 }) => {
  function getVariant(variant) {
    switch (variant) {
      case "robot":
        return robotHead;
      case "cat":
        return cat;
      case "pin":
        return pin;
      case "pencil":
        return pencil;
      case "handpointing":
        return handPointing;
    }
  }
  return <img src={getVariant(variant)} alt={label} height={size} />;
};

export default Icon;
