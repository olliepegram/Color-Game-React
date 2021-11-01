import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    color: #fff;
    background-color: hotpink;
    padding: 40px 0 40px 0;

    h3 {
        font-size: 30px;
    }

    h1 {
        font-size: 70px;
        line-height: 1px;
    }
`;

const Header = ({ colors, chosenIndex }) => {
    return (
        <HeaderWrap>
            <h3>React Color Game</h3>
            <h1>{colors[chosenIndex]}</h1>
        </HeaderWrap>
    );
};

export default Header;
