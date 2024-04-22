import { useState, useEffect} from "react";
import Error from "../../error/error";
import { mockProjects } from "../ProjectsTable/mockProjects";

const useProjects = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectD = mockProjects.find((p) => p.id === parseInt(id, 10));
        if (!projectD) {
          throw new Error("Project not found");
        }

        setProject(projectD);
        setLoading(false);

      } catch (err) {

        setError(err);
        setLoading(false);
      }
    };

    fetchProject();

  }, [id]);

  return { project, loading, error };
};

export default useProjects;