import { useState } from "react";
import styled from "styled-components";
import ProjectsTable from '../components/organisms/ProjectsTable';
import Notifier from "../components/atoms/Notifier";


const ProjectsPage = () => {

  const ProjectsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/mnt/Radqueen/WebStorm Projects/photo-lab/src/images/goals2.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
`;


  return (

    <ProjectsPageContainer>
      <ProjectsTable />
    </ProjectsPageContainer>


  );
};

export default ProjectsPage;
