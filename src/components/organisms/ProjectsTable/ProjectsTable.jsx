import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { mockProjects } from './mockProjects';
import { Table, TableHead, TableCol, TableColActions } from './styled';
import ConfirmWindow from '../../molecules/ConfirmWindow';

const ProjectsTable = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleDelete = (projectId) => {
    setSelectedProjectId(projectId);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting project with ID: ${selectedProjectId}`);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setSelectedProjectId(null);
    setShowConfirmation(false);
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
          {mockProjects.map(({ id, name, description }) => (
            <tr key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <Button variant="primary" onClick={() => {}}>Edit</Button>
                <Button variant="warning" onClick={() => {}}>Show</Button>
                <Button variant="danger" onClick={() => handleDelete(id)}>Delete</Button>
              </TableColActions>
            </tr>
          ))}
        </tbody>
      </Table>
      <ConfirmWindow
        show={showConfirmation}
        onHide={cancelDelete}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default ProjectsTable;
