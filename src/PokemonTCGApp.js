import React, { useState } from "react";
import { CardGrid } from "./components/CardGrid";
import { SelectEnergy } from "./components/SelectEnergy";
import { SelectSet } from "./components/SelectSet";


export const PokemonTCGApp = () => {
  const [energy, setEnergy] = useState("Water");
  const [set, setSet] = useState("base1");


  return (
    <div className="container py-4">
      <div className="text-center">
        <h1>Pokémon TCG Base Set - React App</h1>
        <SelectEnergy setEnergy={setEnergy} />
        <SelectSet setSet={setSet} />
      </div>

      <CardGrid key={energy} setType={set} energyType={energy} />

    </div>
  );
};
