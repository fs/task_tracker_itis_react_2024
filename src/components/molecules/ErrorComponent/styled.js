import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: appear 0.5s ease-in forwards;
  transition: transform 0.5s ease-in;
`;

export const ErrorImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  animation: shake 1s infinite alternate;

  @keyframes shake {
    0% { transform: rotate(-5deg); }
    100% { transform: rotate(5deg); }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Funky', sans-serif;                                 
  color: #000;
  text-align: center;
  transition: transform 1s ease-in;
`;
