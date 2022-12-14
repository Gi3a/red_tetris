import { TETROMINOS } from "../../utils/tetrominos";
import React from "react";

import styled from "styled-components";
import { STAGE_HEIGHT } from "../../utils/gameHelpers";

export const StyledStage = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(STAGE_HEIGHT, 1fr);
`;

export const RowStyle = styled.div`
    width: 100%;
    display: flex;
`;

export const Col = styled.div`
    flex: 1;
    max-width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: rgba(${(props) => props.color});
    border: ${(props) =>
        props.type === 0
            ? `1px solid ${props.theme?.border?.stage}`
            : "1px solid"};
`;


export const Row = ({ row, rowIdx, stage }) => {
    return (
        <RowStyle>
            {row.map((col, colIdx) => {
                return <Cell key={colIdx} colIdx={colIdx} col={col} />;
            })}
        </RowStyle>
    );
};

export const Cell = React.memo(({ colIdx, col }) => {
    return <Col key={colIdx} type={col[0]} color={TETROMINOS[col[0]].color} />;
});

export const Stage = ({ stage }) => {
    return (
        <StyledStage>
            {stage.map((row, key) => (
                <Row key={key} stage={stage} row={row} />
            ))}
        </StyledStage>
    );
};

export default Stage;
