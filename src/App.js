import React, { useEffect, useState } from 'react';
import Header from './Header';
import ColorsList from './ColorsList';
import Menu from './Menu';
import { generateColors, randomIndex } from './helpers';

const App = () => {
    const [colors, setColors] = useState([]);
    const [chosenIndex, setChosenIndex] = useState(randomIndex(6));
    const [difficulty, setDifficulty] = useState(6);
    const [gameState, setGameState] = useState('playing');

    useEffect(() => {
        setColors(generateColors(6));
    }, []);

    const newGame = (n) => {
        setColors(generateColors(n));
        setChosenIndex(randomIndex(n));
    };

    const onBoxClick = (e, target) => {
        const index = colors.indexOf(target);
        const secretTarget = colors.indexOf(colors[chosenIndex]);

        const colorsArr = colors.slice();

        if (index === secretTarget) {
            setGameState('finished');
            colorsArr.fill(colorsArr[secretTarget]);
        } else {
            setGameState('playing');
            colorsArr[index] = 'none';
        }
        return setColors(colorsArr);
    };

    return (
        <div>
            <Header colors={colors} chosenIndex={chosenIndex} />
            <Menu />
            <ColorsList handleClick={onBoxClick} colors={colors} />
        </div>
    );
};

export default App;
