import styled, {css} from "styled-components";

export const StyledButton = styled.button(({ color })=> css`
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: ${color};
    color: white;
    padding: 8px 16px;
    font-size: 16px;
`);