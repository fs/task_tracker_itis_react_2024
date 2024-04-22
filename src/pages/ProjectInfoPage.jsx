import {useParams} from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import {useProject} from "../lib/hooks/project";
import ProjectInfo from "../components/organisms/ProjectInfo";

const ProjectInfoPage = () => {

  const {id} = useParams();
  const { project, loading, error } = useProject({projectId: id});

  return (
    <DefaultTemplate>

      {error && !loading && <div>Ошибка</div>}

      {loading && <div>Загрузка...</div>}

      {project && !loading && <ProjectInfo project={project} />}

    </DefaultTemplate>
  );
};

export default ProjectInfoPage;
