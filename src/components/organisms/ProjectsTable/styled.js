import styled from "styled-components";

export const Table = styled.table`
  margin: 1rem 0;
  text-align: left;
`;

export const TableHead = styled.th`
    padding: 1rem;
    border-bottom: 1px solid #000000;
    color: #000000;
`;

export const TableCol = styled.td`
    padding: 1rem;
    border-bottom: 1px solid rgba(7, 7, 7, 0.7);
    color: #000000;
`;

export const TableColActions = styled(TableCol)`
  button {
    margin-right: 1rem;
  }
`
