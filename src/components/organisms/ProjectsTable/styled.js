import styled from "styled-components";

export const Table = styled.table`
  margin: 1rem 0;
  text-align: left;
`;

export const TableHead = styled.th`
  padding 1rem;
  border-bottom: 1px solid grey;
`;

export const TableCol = styled.td`
  padding 1rem;
  border-bottom: 1px solid grey;
`;

export const TableColActions = styled(TableCol)`
  button {
    margin-right: 1rem;
  }
`
