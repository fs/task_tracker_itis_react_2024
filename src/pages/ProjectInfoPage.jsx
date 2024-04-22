import {useParams} from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import {useProject} from "../lib/hooks/project";
import ProjectInfo from "../components/organisms/ProjectInfo";
import Loader from "../components/atoms/Loader";
import ErrorWindow from "../components/atoms/ErrorWindow";

const ProjectInfoPage = () => {

  const {id} = useParams();
  const { project, loading, error } = useProject({projectId: id});

  return (
    <DefaultTemplate>

      {error && !loading && <ErrorWindow title="Failed to fetch" desc={`Can't fetch and show project with id = ${  id}`}/>}

      {loading && <Loader />}

      {project && !loading && <ProjectInfo project={project} />}

    </DefaultTemplate>
  );
};

export default ProjectInfoPage;
