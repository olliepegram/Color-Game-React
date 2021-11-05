import React, { useCallback, useEffect, useState } from 'react';
import { generateColors, randomIndex } from './helpers';
import Header from './Header';
import ColorsList from './ColorsList';
import Menu from './Menu';

const App = () => {
    const [colors, setColors] = useState([]);
    const [chosenIndex, setChosenIndex] = useState(null);
    const [difficulty, setDifficulty] = useState('hard');
    const [gameState, setGameState] = useState('playing');

    const renderColors = useCallback(() => {
        let n = difficulty === 'easy' ? 3 : 6;
        setColors(generateColors(n));
        setChosenIndex(randomIndex(n));
    }, [difficulty]);

    useEffect(() => {
        renderColors();
    }, [renderColors]);

    const newGame = (level) => {
        setDifficulty(level);
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
            <Header chosenIndex={colors[chosenIndex]} />
            <Menu newGame={newGame} />
            <ColorsList handleClick={onBoxClick} colors={colors} />
        </div>
    );
};

export default App;
