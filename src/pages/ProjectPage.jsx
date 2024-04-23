import { useParams } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { useProject } from "../lib/hooks/project";
import ProjectInfo from "../components/organisms/ProjectInfo";
import Loader from "../components/atoms/Loader";
import Error from "../components/atoms/Error";

const ProjectPage = () => {
  const params = useParams();
  const { id } = params;
  const { project, loading, error } = useProject({ projectId: id });
  return (
    <DefaultTemplate>
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? (
          <Error message={error.message} status={error.networkError.statusCode} />
        ) :
        (loading ? (
          <Loader />
        ) : (
          <div>
            <h1>Project Details</h1>
            <ProjectInfo project={project}/>
          </div>
        ))
      }
    </DefaultTemplate>
  );
};

export default ProjectPage;