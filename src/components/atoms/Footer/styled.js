import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    }

`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;   

    a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
    }

    a:hover {
        color: #ffd700;
    }
`;
