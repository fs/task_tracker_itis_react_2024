import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    position: absolute;
    bottom: 0;
    background: #BAA898;
`;

export const CopyrightText = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    color: #280003;

    & > span {
        transition: color 0.3s;
        cursor: pointer; 
        font-weight: bold;
    }

    & > span:hover {
        transition-duration: .75s;
        color: #848586;
    }
`;