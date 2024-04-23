import ProjectFetchingError from 'src/components/molecules/ErrorComponent/ProjectFetchingError';
import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { useProject } from "../../../lib/hooks/project";
import Loader from "../../molecules/Loader/Loader";
import { ProjectCard, CardHeader, CardBody, ListGroupItem, ListGroupItemLabel } from "./styled";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const { project, loading, error } = useProject({ projectId });
    const isProjectIdNull = project.id === undefined;

    console.log(isProjectIdNull)
    console.log(project.id)
    return (
        <>
            {loading && (
                <Loader />
            )}

            {!loading && error && (
                <ProjectFetchingError errorMessage={error.message} />
            )}

            {!loading && !error && isProjectIdNull && (
              <ProjectFetchingError errorMessage='404! No Project Has Benn Found' />
            )}

            {!loading && !error && !isProjectIdNull && (
              <ProjectCard>
                  <CardHeader>Project Details</CardHeader>
                      <CardBody>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem><ListGroupItemLabel>ID: </ListGroupItemLabel>{project.id}</ListGroupItem>
                          <ListGroupItem><ListGroupItemLabel>Name: </ListGroupItemLabel>{project.name}</ListGroupItem>
                          <ListGroupItem><ListGroupItemLabel>Description: </ListGroupItemLabel>{project.description}</ListGroupItem>
                          <ListGroupItem><ListGroupItemLabel>Created-At: </ListGroupItemLabel>{project.createdAt}</ListGroupItem>
                      </ListGroup>
                  </CardBody>
              </ProjectCard>
            )}
        </>
    );
};

export default ProjectDetails;
