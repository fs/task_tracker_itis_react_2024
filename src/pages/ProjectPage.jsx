import {Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useProject } from "src/lib/hooks/project";

import Error from "src/components/atoms/Error";
import Loader from "src/components/atoms/Loader";
import ProjectInfo from "src/components/organisms/ProjectInfo";
import DefaultTemplate from "../components/templates/DefaultTemplate";

const ProjectPage = () => {
  
    const { id } = useParams();
    const { project, loading, error } = useProject({projectId: id});

    return (
      <DefaultTemplate>
        <h2>Project Info</h2>
  
        {error && !loading && <Error/>}
  
        {loading && <Loader/>}
  
        {project && !loading && <ProjectInfo project={project} />}
        console.log(project)

        <Link to="/projects"><Button style={{background: 'rgba(150, 150, 210, 1)'}} onClick={() => {}}>Back to Projects</Button></Link>
      </DefaultTemplate>
    );
};

export default ProjectPage;