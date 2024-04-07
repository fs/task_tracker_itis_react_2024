import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import { mockProjects } from './mockProjects';

import WarningModal from '../../molecules/ProjectWindows/WarningModal';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {

  const [showModal, setShowModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  // Handling delete button clicked
  const HandleDeleteButton = (project) => {
    setShowModal(true);
    setProjectToDelete(project);
  };

  // Handle modal's confirm deletion clicked
  const HandleConfirmDelete = () => {
    // TODO: TO IMPLEMENT THE LOGIC HERE!
    console.log('project has been deleted!');
    setShowModal(false);
  };

  // Handle modal cancel clicked
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
        {mockProjects.map(({ id, name, description }) => {
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

      <WarningModal message={`Are you sure you want to delete "${projectToDelete.name}"?`}
          onConfirm={HandleConfirmDelete}
          onCancel={HandleCancelDelete} 
          show={showModal}
          />
    )}

    </>
  );
};

export default ProjectsTable;
