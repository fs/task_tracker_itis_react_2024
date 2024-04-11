import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

import { mockProjects } from './mockProjects';
import DeletionWindow from "../../molecules/DeletionWindow";

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {
  const [showDeletionWindow, setShowDeletionWindow] = useState(false);

  const handleDeleteButtonClick = () => {
    setShowDeletionWindow(true);
  };

  const handleCancelDelete = () => {
    setShowDeletionWindow(false);
  };

  const handleConfirmDelete = () => {
    setShowDeletionWindow(false);
  };

  return (
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
                <Button variant="primary" onClick={() => {}}>
                  Edit
                </Button>
                <Button variant="warning" onClick={() => {}}>
                  Show
                </Button>
                <Button variant="danger" onClick={handleDeleteButtonClick}>
                  Delete
                </Button>

                <DeletionWindow
                  show={showDeletionWindow}
                  onClose={handleCancelDelete}
                  onConfirm={handleConfirmDelete}
                />
              </TableColActions>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ProjectsTable;
