import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';

import { useProjects } from "../lib/hooks/project";
import Loader from "../components/atoms/Loader";
import Fetch from "../components/atoms/Fetch";

const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>

      {error && !loading && <Fetch message = "Не удалось загрузить содержимое"/>}

      {loading && <Loader/>}

      {projects && !loading && <ProjectsTable projects={projects} />}
    </DefaultTemplate>
  );
};

export default ProjectsPage;
