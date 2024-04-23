import styled from 'styled-components';

export const LoaderText = styled.h3 `
    font-size: 4rem;
    font-weight: 400;
    color: #000;
    animation: bounce 1s infinite alternate;
    animation-delay: ${({ bounceIndex }) => bounceIndex * 0.2}s;

    @keyframes bounce {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
`;



export const LoaderContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;