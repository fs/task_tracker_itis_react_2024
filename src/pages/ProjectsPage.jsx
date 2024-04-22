import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';

import { useProjects } from "../lib/hooks/project";
import Loader from "../components/atoms/Loader";
import ErrorWindow from "../components/atoms/ErrorWindow";

const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>

      {error && !loading && <ErrorWindow title="Failed to fetch" desc="Can't fetch and show projects" />}

      {loading && <Loader />}

      {projects && !loading && <ProjectsTable projects={projects} />}
    </DefaultTemplate>
  );
};

export default ProjectsPage;
