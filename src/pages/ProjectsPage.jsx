import { useState } from "react";
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

  return (


    <DefaultTemplate>
      <h2>Projects List</h2>

      <ProjectsTable projects={mockProjects} onDelete={(id) => {
        setSelectedItemId(id);
        setShowModal(true);
      }} />
      <DeleteConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDelete}
      />

    </DefaultTemplate>
  );
};

export default ProjectsPage;
