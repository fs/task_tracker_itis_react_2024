import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';
import { useProjects } from "../lib/hooks/project";

const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();

  console.log(projects, loading, error)

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>

      <ProjectsTable />
    </DefaultTemplate>
  );
};

export default ProjectsPage;
