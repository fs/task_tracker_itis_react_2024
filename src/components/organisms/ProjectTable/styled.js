import styled from "styled-components";

export const Table = styled.table`
    margin: 1rem 1rem;
`;

export const TableHead = styled.th`
    padding: 0.5rem;
    border-bottom: 1px solid;
`;

export const TableRow = styled.tr`
`;

export const TableCol = styled.td`
    padding: 1rem;
    border-bottom: 1px solid;
`;

export const TableColActions = styled(TableCol)`
    button {
        margin-right: 0.5rem;
    }
`;