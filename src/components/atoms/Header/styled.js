import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  background: red;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin-right: 10px;
  }

  p {
    color: white;
    margin-right: 10px;
  }
`;
