import styled, {css, keyframes} from 'styled-components';

const rotate = keyframes`
  100%   {transform: rotate(360deg)}
`;

export const StyledLoader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${rotate} 1s linear infinite;
`;
