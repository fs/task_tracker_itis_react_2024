import { useQuery } from "@apollo/client";

import Projects from "src/graphql/queries/projects";
import Project from "src/graphql/queries/project";

export const useProjects = () => {
  const { data, loading, error } = useQuery(Projects, {
    fetchPolicy: "cache-and-network",
  });

  return {
    loading,
    error,
    projects: data?.projects || [],
  }
};






export const useProject = ({ projectId }) => {
  const { data, loading, error } = useQuery(Project, {
    fetchPolicy: "cache-and-network",
    variables: { projectId }
  });

  return {
    project: data?.project || {},
    loading,
    error,
  };
}
