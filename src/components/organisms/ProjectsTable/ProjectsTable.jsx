import Button from 'react-bootstrap/Button';

import { useState, useContext } from "react";

import DeleteConfirmationModal from "../../molecules/DeleteConfirmationModal";

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import NotifierContext from "../../../context/NotifierContext";

const ProjectsTable = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setMessage } = useContext(NotifierContext)

  const [projectToDelete, setProjectToDelete] = useState(null);
  const [mockProjectsState, setMockProjectsState] = useState([...mockProjects])

  const handleOpenModal = (project) => {
    setProjectToDelete(project);
    setIsModalOpen(true);
  }

  const handleConfirmButton = () => {
    const updatedProjects = mockProjectsState.filter(project => project.id !== projectToDelete.id);
    setMockProjectsState(updatedProjects);

    setProjectToDelete(null);
    setMessage('Project Deleted')
    // setMessageType('success')
    setIsModalOpen(false);
  }

  const handleCancelButton = () => {
    setProjectToDelete(null);
    setMessage('An error ocurred')
    // setMessageType('error')
    setIsModalOpen(false);
  }

  return (
    <>
    <Table>
      <thead>
        <tr>
          <TableHead>id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </tr>
      </thead>

      <tbody>
        {mockProjectsState.map(({ id, name, description }) => {
          return (
            <tr key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <Button variant="btn btn-outline-primary" onClick={() => {}}>Edit</Button>
                <Button variant="btn btn-outline-warning" onClick={() => {}}>Show</Button>
                <Button variant="btn btn-outline-danger" onClick={() => handleOpenModal({id, name, description})}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>

  {isModalOpen && (
    <DeleteConfirmationModal
      onHide={handleCancelButton}
      onConfirm={handleConfirmButton}
      isOpen={isModalOpen}
      />
  )}
  </>
  );
};

export default ProjectsTable;
