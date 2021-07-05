import React, { useState } from 'react'
import { CardGrid } from './components/CardGrid'
import { SelectEnergy } from './components/SelectEnergy'


export const PokemonTCGApp = () => {
    const [energy, setEnergy] = useState('Water')

    return (
        <div className="container py-4">
            <div className="text-center">
                <h1>Pokemon TCG APP</h1>
                <SelectEnergy setEnergy={setEnergy} />
            </div>

         
            <CardGrid key={energy} energyType={energy}/>
        </div>
    )
}
