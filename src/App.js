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
        setGameState('playing');
    }, [difficulty]);

    useEffect(() => {
        renderColors();
    }, [renderColors]);

    const newGame = (level) => {
        if (level === 'easy' || level === 'hard') {
            setDifficulty(level);
        } else if (level === 'new') {
            if (difficulty === 'easy') {
                setDifficulty('easy');
            } else if (difficulty === 'hard') {
                setDifficulty('hard');
            }
            renderColors();
        }
    };

    const onBoxClick = (e, target) => {
        const index = colors.indexOf(target);
        const secretTarget = colors.indexOf(colors[chosenIndex]);

        const colorsArr = colors.slice();

        if (index === secretTarget) {
            setGameState('finished');
            colorsArr.fill(colorsArr[secretTarget]);
        } else {
            colorsArr[index] = 'none';
            setGameState('playing');
        }

        return setColors(colorsArr);
    };

    return (
        <div>
            <Header gameState={gameState} chosenIndex={colors[chosenIndex]} />
            <Menu newGame={newGame} />
            <ColorsList handleClick={onBoxClick} colors={colors} />
        </div>
    );
};

export default App;
