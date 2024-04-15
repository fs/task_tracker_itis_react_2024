import Button from 'react-bootstrap/Button';

import { useContext, useState } from "react";

import DeleteModal from '../../molecules/DeleteModal';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import NotifierContext from "../../../context/NotifierContext";

const ProjectsTable = () => {
  const {setMessage} = useContext(NotifierContext);
  const {setError} = useContext(NotifierContext);
  const [projects, setProjects] = useState(mockProjects);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleDeleteButton = (project) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  }

  const handleDeleteCancelButton = () => {
    setProjectToDelete(null);
    setShowDeleteModal(false);
    setError("Проект не был удален");
  }

  const handleDeleteConfirmButton = () => {
    setProjects(projects.filter(project => project.id !== projectToDelete.id))
    setProjectToDelete(null);
    setShowDeleteModal(false);
    setMessage("Проект удален");
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
      onCancel={handleDeleteCancelButton}
      onDelete={handleDeleteConfirmButton}
      show={showDeleteModal} />))
    }
    </>
  );
};

export default ProjectsTable;
