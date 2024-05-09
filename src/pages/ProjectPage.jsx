import {Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useProject } from "src/lib/hooks/project";

import Fetch from "src/components/atoms/Fetch";
import Loader from "src/components/atoms/Loader";
import Project from "src/components/organisms/Project";
import DefaultTemplate from "../components/templates/DefaultTemplate";

const ProjectPage = () => {

  const { id } = useParams();
  const { project, loading, error } = useProject({projectId: id});

  return (
    <DefaultTemplate>
      {error && !loading && <Fetch/>}

      {loading && <Loader/>}

      {project && !loading && <Project project={project} />}

      <Link to="/projects"><Button variant="light">Back to projects</Button></Link>
    </DefaultTemplate>
  );
};

export default ProjectPage;