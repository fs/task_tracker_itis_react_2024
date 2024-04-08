import DefaultTemplate from "../components/templates/DefaultTemplate"
import data from "../components/organisms/ProjectTable/data";
import ProjectInfo from "../components/atoms/ProjectInfo";
import ProjectTable from "../components/organisms/ProjectTable/ProjectTable";

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      <h2>Projects list</h2>
      <ProjectTable />
    </DefaultTemplate>
  )
}

export default ProjectsPage;
