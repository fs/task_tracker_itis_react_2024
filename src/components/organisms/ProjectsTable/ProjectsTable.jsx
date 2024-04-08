import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import DeleteModal from '../../molecules/DeleteModal';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const HandleDeleteButton = (project) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  }

  const HandleDeleteCancelButton = () => {
    setProjectToDelete(null);
    setShowDeleteModal(false);
  }

  const HandleDeleteConfirmButton = () => {
    // тут как будто удалили проект
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
                <Button variant="danger" onClick={() => {HandleDeleteButton({ id, name, description })}}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>

    { (showDeleteModal && (
      <DeleteModal text={`The project "${projectToDelete.name}" will be permanently deleted. Are you sure?`} 
      onCancel={HandleDeleteCancelButton} 
      onDelete={HandleDeleteConfirmButton} 
      show={showDeleteModal} />))
    }
    </>
  );
};

export default ProjectsTable;
