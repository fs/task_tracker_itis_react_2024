import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';


const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      <h2>Projects List</h2>

      <ProjectsTable />

    </DefaultTemplate>
  );
};

export default ProjectsPage;
