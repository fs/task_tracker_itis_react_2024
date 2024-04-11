import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - 52px - 62px);
  flex-grow: 1;
  padding: 1rem;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  z-index: 1;
`;
