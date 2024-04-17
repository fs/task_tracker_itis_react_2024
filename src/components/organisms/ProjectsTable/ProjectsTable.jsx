import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import { mockProjects } from './mockProjects';

import ModalWindow from '../../molecules/ModalWindow/ModalWindow';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {

  const [showModal, setShowModal] = useState(false);

  const [projectToDelete, setProjectToDelete] = useState(null);

  const [mockProjectsState, setMockProjectsState] = useState([...mockProjects]);

  const RemoveProject = (id) => {
    const updatedProjects = mockProjectsState.filter( (project) => project.id !== id);
    setMockProjectsState(updatedProjects);
  };

  const HandleDeleteButton = (project) => {
    setShowModal(true);
    setProjectToDelete(project);
  };

  const HandleConfirmDelete = () => {
    RemoveProject(projectToDelete.id);
    setShowModal(false);
    setProjectToDelete(null);
  };

  const HandleCancelDelete = () => {
    setShowModal(false);
  };

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
                <Button variant="primary" onClick={() => {}}>Edit</Button>
                <Button variant="warning" onClick={() => {}}>Show</Button>
                <Button variant="danger" onClick={() => HandleDeleteButton({ id, name, description })}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>
  

    { showModal && (

<ModalWindow message={`Удалить проект "${projectToDelete.name}"?`}
    onConfirm={HandleConfirmDelete}
    onCancel={HandleCancelDelete} 
    show={showModal}
    />
)}

</>
);
};

export default ProjectsTable;
