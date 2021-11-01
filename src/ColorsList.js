import React from 'react';
import Color from './Color';
import styled from 'styled-components';

const BoxContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const ColorsList = ({ colors }) => {
    return (
        <BoxContainer>
            {colors.map((color) => (
                <Color key={color} color={color} />
            ))}
        </BoxContainer>
    );
};

export default ColorsList;
