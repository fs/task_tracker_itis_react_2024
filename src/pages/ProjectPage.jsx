import React from "react";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { useProject } from "../lib/hooks/project";
import ErrorDisplay from "../components/atoms/ErrorDisplay";
import ProjectSkeleton from "../components/atoms/SkeletonLoading/ProjectSkeleton";

const ProjectPage = () => {
  const { projectId } = useParams();
  const { loading, error, project } = useProject({ projectId });

  return (
    <DefaultTemplate>
      {error && <ErrorDisplay message={`Failed to fetch project: ${error.message}`} />}
      {loading && <ProjectSkeleton />}
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </DefaultTemplate>
  );
};

export default ProjectPage;
