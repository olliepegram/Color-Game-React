import React from 'react';
import Color from './Color';
import styled from 'styled-components';

const BoxContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 980px;
    margin: 0 auto;
`;

const ColorsList = ({ colors, handleClick }) => {
    return (
        <BoxContainer>
            {colors.map((color, i) => (
                <Color handleClick={handleClick} key={i} color={color} />
            ))}
        </BoxContainer>
    );
};

export default ColorsList;
