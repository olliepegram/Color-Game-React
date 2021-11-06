import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    color: #fff;
    /* background-color: #edb88b; */
    padding: 25px 0 20px 0;

    background: ${(props) =>
        props.gameState === 'finished' ? props.background : 'rgb(19,104,163)'};

    h3 {
        font-size: 30px;
        line-height: 50px;
    }

    h1 {
        font-size: 70px;
        line-height: 1px;
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 45px;
        }
    }
`;

const Header = ({ gameState, chosenIndex }) => {
    return (
        <HeaderWrap background={chosenIndex} gameState={gameState}>
            <h3>Guess The Color</h3>
            <h1>{chosenIndex}</h1>
            {gameState === 'finished' ? <h3>You got it!</h3> : <h3>...</h3>}
        </HeaderWrap>
    );
};

export default Header;
