import Loader from "src/components/atoms/Loader";
import FetchError from "src/components/atoms/FetchError";
import Project from "src/components/organisms/Project";

import { useParams } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";

import { useProject } from "../lib/hooks/project";

const ProjectPage = () => {
  const {id} = useParams();
  const { project, loading, error } = useProject({projectId: id});

  return (
    <DefaultTemplate>
      <h2>Project Info</h2>

      {error && !loading && <FetchError />}

      {loading && <Loader />}

      {project && !loading && <Project project={project} />}
    </DefaultTemplate>
  );
};

export default ProjectPage;
