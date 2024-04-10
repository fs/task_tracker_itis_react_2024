import styled from "styled-components";

export const Table = styled.table`
  margin: 1rem 0;
  text-align: left;
`;

export const TableHead = styled.th`
    padding: 1rem;
    border-bottom: 1px solid #ffffff;
    color: #FFFFFF;
`;

export const TableCol = styled.td`
    padding: 1rem;
    border-bottom: 1px solid #ffffff;
    color: #FFFFFF;
`;

export const TableColActions = styled(TableCol)`
  button {
    margin-right: 1rem;
  }
`
