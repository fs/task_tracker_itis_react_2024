import Button from 'react-bootstrap/Button';

import { useState } from "react";
import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';

import DeleteModalWindow from "../../molecules/DeleteModalWindow";

const ProjectsTable = () => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null)


  const handleDeleteClick = (project) => {
    setSelectedProject(project)
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
  };

  const handleModalClose = () => {
    setShowDeleteModal(false);
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
                <Button variant="danger" onClick={() => handleDeleteClick({ id, name, description })}>Delete</Button>              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>

    <DeleteModalWindow
      show={showDeleteModal}
      onHide={handleModalClose}
      onConfirm={handleDeleteConfirm}
      id={selectedProject && selectedProject.id}
    />
  </>
  )
}

export default ProjectsTable;
