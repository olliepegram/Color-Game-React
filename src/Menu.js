import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    max-width: 100%;
    background: #2e282a;

    .menu-inner {
        max-width: 980px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    button {
        padding: 15px;
        max-width: 150px;
        border: none;
        background: #2e282a;
        color: white;
        transition: all 0.2s ease;
        font-size: 20px;
    }

    button:hover {
        background: #f7fff7;
        color: #333;
    }

    .right {
        margin-left: 20px;
        margin-right: 10px;
    }

    .left {
        flex-grow: 1;
        margin-right: auto;
    }
`;

const Menu = ({ newGame }) => {
    const onButtonClick = (e) => {
        newGame(e.target.value);
    };

    return (
        <MenuWrapper>
            <div className='menu-inner'>
                <button
                    className='left'
                    value='new'
                    onClick={(e) => onButtonClick(e)}
                >
                    New Game
                </button>
                <button
                    className='right'
                    value='easy'
                    onClick={(e) => onButtonClick(e)}
                >
                    Easy
                </button>
                <button
                    className='right'
                    value='hard'
                    onClick={(e) => onButtonClick(e)}
                >
                    Hard
                </button>
            </div>
        </MenuWrapper>
    );
};

export default Menu;
