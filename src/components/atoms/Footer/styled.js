import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 52px;

  padding: 1rem;
  background-color: rgba(116, 66, 200, 0.7);
  color: white;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
`;

export const StyledLink = styled(Link)`
  color: white;

  font-size: 1rem;
`;
