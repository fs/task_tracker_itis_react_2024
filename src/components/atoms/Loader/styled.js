import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LoaderSpinner = styled.div`
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: rgba(116, 66, 200, 0.7);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite; 
`;
