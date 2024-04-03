import styled, { css } from 'styled-components';

export const StyledButton = styled.button(
  ({ color }) => css`
    color: ${color};
    border: 1px solid ${color};
    border-radius: 0.25rem;

    font-weight: bold;
    padding: 0.5rem 1rem;
  `,
);
