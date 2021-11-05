import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 350px;
    height: 350px;
    margin: 20px;
    border-radius: 20px;

    background: ${(props) => (props.color ? props.color : 'white')};
    /* Firefox */
    -moz-transition: all 1s ease-in;
    /* WebKit */
    -webkit-transition: all 1s ease-in;
    /* Opera */
    -o-transition: all 1s ease-in;
    /* Standard */
    transition: all 1s ease-in;
`;

const Color = ({ color, handleClick }) => {
    const onBoxClick = (e) => {
        handleClick(e, color);
    };

    return <Box color={color} onClick={(e) => onBoxClick(e)} />;
};

export default Color;
