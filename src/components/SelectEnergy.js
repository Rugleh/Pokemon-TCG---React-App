import React from "react";

import ColorlessIcon from "../icons/Colorless.svg";
import FightingIcon from "../icons/Fighting.svg";
import FireIcon from "../icons/Fire.svg";
import GrassIcon from "../icons/Grass.svg";
import LightningIcon from "../icons/Lightning.svg";
import PsychicIcon from "../icons/Psychic.svg";
import WaterIcon from "../icons/Water.svg";

import "./SelectEnergy.scss";

export const SelectEnergy = ({ setEnergy }) => {
  const handleButton = (e) => {
    setEnergy(e.target.value);
  };

  const types = [
    { name: "Colorless", icon: ColorlessIcon },
    { name: "Fighting", icon: FightingIcon },
    { name: "Fire", icon: FireIcon },
    { name: "Grass", icon: GrassIcon },
    { name: "Lightning", icon: LightningIcon },
    { name: "Psychic", icon: PsychicIcon },
    { name: "Water", icon: WaterIcon },
  ];

  return (
    <div className="py-4">
      {types.map((type) => (
        <button
          className={"icon mx-2 my-2 " + (type.name).toLowerCase()}
          key={type.name}
          value={type.name}
          onClick={handleButton}
        >
          <img src={type.icon} alt={type.icon} />
        </button>
      ))}
    </div>
  );
};
