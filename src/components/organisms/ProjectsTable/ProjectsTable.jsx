import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import DeleteModal from '../../molecules/DeleteModal';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleDeleteButton = (project) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  }

  const handleDeleteCancelButton = () => {
    setProjectToDelete(null);
    setShowDeleteModal(false);
  }

  const handleDeleteConfirmButton = () => {
    setProjectToDelete(null);
    setShowDeleteModal(false);
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
        {mockProjects.map(({ id, name, description }) => {
          return (
            <tr key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <Button variant="light" onClick={() => {}}>Edit</Button>
                <Button variant="light" onClick={() => {}}>Show</Button>
                <Button variant="danger" onClick={() => {handleDeleteButton({ id, name, description })}}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>

    { (showDeleteModal && (
      <DeleteModal text={`The project "${projectToDelete.name}" will be permanently deleted. Are you sure?`}
      projectName={projectToDelete.name}
      onCancel={handleDeleteCancelButton}
      onDelete={handleDeleteConfirmButton}
      isOpen={showDeleteModal} />))
    }
    </>
  );
};

export default ProjectsTable;
