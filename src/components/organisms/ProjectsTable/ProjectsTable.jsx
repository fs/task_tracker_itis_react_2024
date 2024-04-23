import Button from 'react-bootstrap/Button';

import { useState, useContext } from 'react';

import { useNavigate } from "react-router-dom";
import DeleteModal from '../../molecules/DeleteModal';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import NotifierContext from "../../../context/NotifierContext";

const ProjectsTable = ({projects}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setMessage } = useContext(NotifierContext)

  const handleOpenModal = (project) => {
    setIsModalOpen(true);
  }

  const handleCancelButton = () => {
    setIsModalOpen(false);
  }

  const handleConfirmButton = () => {
    // const updatedProjects = mockProjectsState.filter(project => project.id !== projectToDelete.id);
    // setMockProjectsState(updatedProjects);

    setProjectToDelete(null);
    setMessage('Проект удален')
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
          {projects.map(({ id, name, description }) => {
            return (
              <tr key={id}>
                <TableCol>{id}</TableCol>
                <TableCol>{name}</TableCol>
                <TableCol>{description}</TableCol>

                <TableColActions>
                  <Button variant="light" onClick={() => {}}>Edit</Button>
                  <Button variant="light" onClick={() => {navigate(`/project/${id}`)}}>Show</Button>
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
