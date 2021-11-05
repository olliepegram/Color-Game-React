import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 350px;
    height: 350px;
    margin: 20px;
    border-radius: 20px;
    flex: auto;

    background: ${(props) => (props.color ? props.color : 'white')};
    -webkit-transition: background 0.2s ease-in-out;
    -moz-transition: background 0.2s ease-in-out;
    -o-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
`;

const Color = ({ color, handleClick }) => {
    const onBoxClick = (e) => {
        handleClick(e, color);
    };

    return <Box color={color} onClick={(e) => onBoxClick(e)} />;
};

export default Color;
