import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 350px;
    height: 350px;
    margin: 20px;
`;

const Color = ({ color }) => {
    return (
        <div>
            <Box style={{ backgroundColor: color }} />
        </div>
    );
};

export default Color;
