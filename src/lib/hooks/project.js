import { useQuery } from "@apollo/client";

import ProjectQuery from "src/graphql/queries/project";


export const useProject = ({ projectId }) => {
  const { data, loading, error } = useQuery(ProjectQuery, {
    fetchPolicy: "cache-and-network",
    variables: { projectId },
  });

  return {
    project: data?.project || {},
    loading,
    error,
  };
};
