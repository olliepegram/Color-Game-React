import React from 'react';

const Menu = ({ newGame }) => {
    const onButtonClick = (e) => {
        newGame(e.target.value);
    };

    return (
        <div>
            <button value='new'>New Game</button>
            <button value='easy' onClick={(e) => onButtonClick(e)}>
                Easy
            </button>
            <button value='hard' onClick={(e) => onButtonClick(e)}>
                Hard
            </button>
        </div>
    );
};

export default Menu;
