import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #343a40;
  color: white;
  padding: 10px;
  text-align: center;
  gap: 30px;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    gap: 30px;
  }

  li {
    display: inline;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  a:hover {
    color: #ffd700;
  }
`;
