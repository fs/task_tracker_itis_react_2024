import styled from "styled-components";

export const TaskWrapper = styled.li`
    list-style-type: none;
    padding: 0;
`;

export const TaskDetails = styled.li`
    display: flex;
    justify-content: space-between;

    font-weight: bold;
`;

export const TaskName = styled.h2`
    font-weight: bold;
`;

export const TaskDate = styled.p`
    color: #888;
`;

export const TaskAuthor = styled.p`
    font-style: italic;
`;