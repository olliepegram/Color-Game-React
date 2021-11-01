import React, { useEffect, useState } from 'react';
import Header from './Header';
import ColorsList from './ColorsList';
import { generateColors, randomIndex } from './helpers';

const App = () => {
    const [colors, setColors] = useState([]);
    const [chosenIndex, setChosenIndex] = useState(null);
    const [difficulty, setDifficulty] = useState(6);
    const [gameState, setGameState] = useState('playing');

    useEffect(() => {
        setColors(generateColors(6));
        setChosenIndex(randomIndex(6));
    }, []);

    return (
        <div>
            <Header colors={colors} chosenIndex={chosenIndex} />
            <ColorsList colors={colors} />
        </div>
    );
};

export default App;
