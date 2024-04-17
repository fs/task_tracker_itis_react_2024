import Button from 'react-bootstrap/Button';

import { useState, useContext } from 'react';

import DeleteModal from '../../molecules/DeleteModal';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import NotifierContext from "../../../context/NotifierContext";

const ProjectsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setMessage, setErrorMessage } = useContext(NotifierContext)

  const [projectToDelete, setProjectToDelete] = useState(null);
  const [mockProjectsState, setMockProjectsState] = useState([...mockProjects]);

  const handleOpenModal = (project) => {
    setProjectToDelete(project);
    setIsModalOpen(true);
  }

  const handleCancelButton = () => {
    setProjectToDelete(null);
    setIsModalOpen(false);
  }

  const handleConfirmButton = () => {
    try {

      // Made-up error to check the correctness of the functionality 
      if (projectToDelete.id === 10) {
        throw new Error("Please be kidding! You CAN'T delete this project!")
      };

      const updatedProjects = mockProjectsState.filter(project => project.id !== projectToDelete.id);
      setMockProjectsState(updatedProjects);

      setProjectToDelete(null);
      setMessage('Проект удален')
      setIsModalOpen(false);
      
    } catch (error) {
      setErrorMessage(error.message)
      setIsModalOpen(false);
    }
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
                  <Button variant="light" onClick={() => {}}>Edit</Button>
                  <Button variant="light" onClick={() => {}}>Show</Button>
                  <Button variant="danger" onClick={() => handleOpenModal({ id, name, description })}>Delete</Button>
                </TableColActions>
              </tr>
            )
          })}
        </tbody>
      </Table>

      {isModalOpen && (
        <DeleteModal
          // projectName={mock.name}
          onCancel={handleCancelButton}
          onDelete={handleConfirmButton}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default ProjectsTable;
