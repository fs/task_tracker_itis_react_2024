import styled from "styled-components";

export const ErrorWrapper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const ErrorImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const ErrorTitle = styled.h1`
    text-align: center;
    --color-1: #186cb8;
    --color-2: #2a9a9f;
    --color-3: #f1b211;
    --color-4: #e83611;
    --color-5: #f9002f;
    font-family: sans-serif;
    font-size: 4vw;
    font-weight: 1000;
    text-transform: uppercase;
    background: linear-gradient(45deg,
    #186cb8 19%,
    transparent 19%, transparent 20%,
    #2a9a9f 20%, #2a9a9f 39%,
    transparent 39%, transparent 40%,
    #f1b211 40%, #f1b211 59%,
    transparent 59%, transparent 60%,
    #e83611 60%, #e83611 79%,
    transparent 79%, transparent 80%,
    #f9002f 80%);
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
`;

export const ErrorMessage = styled.h2`
    text-align: center;
`;