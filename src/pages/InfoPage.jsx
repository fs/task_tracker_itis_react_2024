// import DefaultTemplate from "../components/templates/DefaultTemplate";

import React from "react";
import styled from "styled-components";

const InfoPageContainer = styled.div`
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

const InfoPage = () => {
  return (
    <InfoPageContainer>
      <div>
        <h1>Info Page</h1>
        <p>Learn more about us here</p>
      </div>
    </InfoPageContainer>

  );
};


export default InfoPage;
