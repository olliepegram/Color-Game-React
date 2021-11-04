import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    width: 350px;
    height: 350px;
    margin: 20px;
    border-radius: 20px;

    ${(props) =>
        props.color &&
        css`
            background: props.color;
        `};
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

    return <Box onClick={(e) => onBoxClick(e)} />;
};

export default Color;
