import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    background-image: url(/background.jpg);
    background-size: 150px;
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: white;
    padding-top: 1rem;
    //background-image: url(/background.jpg);
    //background-size: 100px;
    //background-repeat: repeat;
    //color: transparent;
    //-webkit-background-clip: text;
    //background-clip: text;
    margin-right: 99rem;
    margin-left: 1rem;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavLink = styled(Link)`
    margin-right: 1rem;
    font-size: 20px;
    font-weight: 600;
    color: white;
    //background-image: url(/background.jpg);
    //background-size: 100px;
    //background-repeat: repeat;
    //color: transparent;
    //-webkit-background-clip: text;
    //background-clip: text;
`;
