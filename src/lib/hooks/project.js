import { useQuery } from "@apollo/client";

import Project from "src/graphql/queries/project";

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
