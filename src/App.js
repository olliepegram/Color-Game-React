import React, { useEffect, useState } from 'react';
import Header from './Header';
import ColorsList from './ColorsList';
import Menu from './Menu';
import { generateColors, randomIndex } from './helpers';

const App = () => {
    const [colors, setColors] = useState([]);
    const [chosenIndex, setChosenIndex] = useState();
    const [difficulty, setDifficulty] = useState('hard');
    const [gameState, setGameState] = useState('playing');

    useEffect(() => {
        renderColors();
    }, [difficulty]);

    const renderColors = () => {
        let n = difficulty === 'easy' ? 3 : 6;
        setColors(generateColors(n));
        setChosenIndex(randomIndex(n));
    };

    const newGame = (level) => {
        setDifficulty(level);
        renderColors();
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
            <Menu newGame={newGame} />
            <ColorsList handleClick={onBoxClick} colors={colors} />
        </div>
    );
};

export default App;
