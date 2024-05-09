import { useQuery } from "@apollo/client";

import ProjectQuerry from "src/graphql/queries/project";

export const useProject = ({ projectId }) => {
    const { data, loading, error } = useQuery(ProjectQuerry, {
        fetchPolicy: "cache-and-network",
        variables: { projectId },
    });

    return {
        loading,
        error,
        project: data?.project || {},
    }
};
