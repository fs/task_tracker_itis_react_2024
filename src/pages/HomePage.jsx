// import DefaultTemplate from "src/components/templates/DefaultTemplate"

import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px; /* Adjust as needed */
    box-shadow: 0 0 10px rgb(19, 17, 19); /* Add a shadow for depth */
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the Photo Lab</p>
      </div>
    </HomePageContainer>

  );
};

export default HomePage;
