import React, { useEffect, useState } from 'react';
import ColorsList from './ColorsList';
import { generateColors, randomIndex } from './helpers';

const App = () => {
    const [colors, setColors] = useState(generateColors(6));
    const [chosenIndex, setChosenIndex] = useState(randomIndex(6));
    const [difficulty, setDifficulty] = useState(6);
    const [gameState, setGameState] = useState('playing');

    return (
        <div>
            <ColorsList colors={colors} />
        </div>
    );
};

export default App;
