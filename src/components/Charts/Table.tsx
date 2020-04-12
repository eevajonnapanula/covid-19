import React, { FunctionComponent } from 'react';
import { XAndY } from '../../interfaces';
import styled from 'styled-components';

interface TableProps {
  data: XAndY[];
  x: string;
  y: string;
}
const TableWrapper = styled.div`
  max-height: 20rem;
  overflow: scroll;
`;
const StyledTable = styled.table`
  font-size: 2rem;
  margin: 1rem;
`;

const StyledHead = styled.tr`
  background-color: #e4e3d3;
  color: #2e2d4d;
`;

const StyledRow = styled.tr`
  text-align: right;
`;

const Cell = styled.td`
  border: 0.15rem solid #e4e3d3;
  padding: 0.5rem;
  width: calc((100vw - 5rem) / 2);
`;

const Table: FunctionComponent<TableProps> = ({ data, x, y }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <StyledHead>
            <th>{x}</th>
            <th>{y}</th>
          </StyledHead>
        </thead>
        <tbody>
          {data.map((datum, i) => (
            <StyledRow key={datum.y + i}>
              <Cell>{datum.x}</Cell>
              <Cell>{datum.y}</Cell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
