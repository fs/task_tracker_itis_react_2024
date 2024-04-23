import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import ProjectFetchingError from 'src/components/molecules/ErrorComponent/ProjectFetchingError';
import DeleteModal from '../../molecules/DeleteModal';
import { Table, TableHead, TableCol, TableColActions } from './styled';
import NotifierContext from "../../../context/NotifierContext";
import { useProjects } from "../../../lib/hooks/project";
import Loader from "../../molecules/Loader/Loader";


const ProjectsTable = () => {
  const { projects, loading, error: errorState } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsList, setProjectsList] = useState(projects)
  const { setMessage, setErrorMessage } = useContext(NotifierContext)

  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleOpenModal = (project) => {
    setProjectToDelete(project);
    setIsModalOpen(true);
  }

  const handleCancelButton = () => {
    setProjectToDelete(null);
    setIsModalOpen(false);
  }

  const handleConfirmButton = () => {
    try {

      // Made-up error to check the correctness of the functionality 
      if (projectToDelete.id === 10) {
        throw new Error("Please be kidding! You CAN'T delete this project!")
      };

      const updatedProjects = projects.filter(project => project.id !== projectToDelete.id);
      setProjectsList(updatedProjects);

      setProjectToDelete(null);
      setMessage('Проект удален')
      setIsModalOpen(false);
      
    } catch (error) {
      setErrorMessage(error.message)
      setIsModalOpen(false);
    }
  }

  // DEBUGGING...
  console.log(`PROJECTS TABLE -> `, projects)

  return (
    <>
      {loading && (
        <Loader />
      )}

      {!loading && errorState && (
        <ProjectFetchingError errorMessage={errorState.message} />
      )}

      {!loading && !errorState && (
        <>
        <h2>Projects List</h2>

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
            {projects.map(({ id, name, description, createdAt }) => {
              return (
                <tr key={id}>
                  <TableCol>{id}</TableCol>
                  <TableCol>{name}</TableCol>
                  <TableCol>{description}</TableCol>
                  <TableCol>{createdAt}</TableCol>

                  <TableColActions>
                    <Button variant="light" onClick={() => {}}>Edit</Button>
                    <Link to={`/projects/${id}`}><Button variant="light">Show</Button></Link>
                    <Button variant="danger" onClick={() => handleOpenModal({ id, name, description })}>Delete</Button>
                  </TableColActions>
                </tr>
              )
            })}
          </tbody>
        </Table>
        </>
      )}

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
