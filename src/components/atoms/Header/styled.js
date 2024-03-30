import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #343a40;
  color: white;
  padding: 10px;
  text-align: center;
  gap: 30px;
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    gap: 30px;
    margin-right: 10px;
  }

  a:hover {
    color: #ffd700;
  }
`;
