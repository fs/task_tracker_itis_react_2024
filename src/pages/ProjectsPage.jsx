import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';
import { useProjects } from "../lib/hooks/project";
import Error from "../components/atoms/Error";
import Loader from "../components/atoms/Loader";


const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();

  console.log(projects, loading, error)

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? (
        <Error message={error.message} status={error.networkError.statusCode}/>
      ) :
        (loading ? (
            <Loader/>
          ) : (
            <ProjectsTable projects={projects}/>
          ))
      }


    </DefaultTemplate>
  );
};

export default ProjectsPage;
