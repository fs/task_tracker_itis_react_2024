import React from "react";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from "../components/organisms/ProjectsTable";
import ErrorDisplay from "../components/atoms/ErrorDisplay";
import ProjectSkeleton from "../components/atoms/SkeletonLoading/ProjectsSkeleton";

import { useProjects } from "../lib/hooks/projects";

const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>
      {error && <ErrorDisplay message="Failed to fetch projects. Please try again." />}
      {loading && <ProjectSkeleton />}
      {projects && !loading && <ProjectsTable projects={projects} />}
    </DefaultTemplate>
  );
};

export default ProjectsPage;
