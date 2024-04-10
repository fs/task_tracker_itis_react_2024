import { useState } from "react";
import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';
import DeleteConfirmationModal from "../components/molecules/DeleteConfirmationModal";
import {mockProjects} from "../components/organisms/ProjectsTable/mockProjects";


const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleDelete = () => {
    if (confirmDelete) {
      console.log('Deleting item...');
      const updatedProjects = mockProjects.filter(project => project.id !== selectedItemId);
      console.log('Updated projects:', updatedProjects);
      // After deletion, close the modal
      setShowModal(false);
    }
  };

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
      <ProjectsTable projects={mockProjects} onDelete={(id) => {
        setSelectedItemId(id);
        setShowModal(true);
      }} />
      <DeleteConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </ProjectsPageContainer>


  );
};

export default ProjectsPage;
