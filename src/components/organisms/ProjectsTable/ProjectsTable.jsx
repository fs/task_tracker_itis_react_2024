import Button from 'react-bootstrap/Button';

import { useState, useContext } from 'react';

import DeleteModal from '../../molecules/DeleteModal';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import NotifierContext from "../../../context/NotifierContext";

const ProjectsTable = ({ projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setMessage, setErrorMessage } = useContext(NotifierContext)


  const handleOpenModal = (project) => {
    setIsModalOpen(true);
  }

  const handleCancelButton = () => {
    setErrorMessage('Удаление проекта отменено');
    setIsModalOpen(false);
  }

  const handleConfirmButton = () => {
    // добавить мутацию удаления проекта
    setMessage('Проект удален');
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
                  <Button variant="light">
                    <a href={`/projects/${  id}`}>Show</a>
                  </Button>
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
