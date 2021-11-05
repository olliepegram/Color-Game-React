import React from 'react';
import Color from './Color';
import styled from 'styled-components';

const BoxContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
