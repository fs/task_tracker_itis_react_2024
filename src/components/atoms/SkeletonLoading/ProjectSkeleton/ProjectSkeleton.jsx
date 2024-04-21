import React from "react";
import { SkeletonWrapper } from "./styled";

const ProjectsSkeleton = () => {
  return (
    <SkeletonWrapper>
          <div className="skeleton-line" style={{ width: "200px" }} />
          <div className="skeleton-line" style={{ width: "800px" }} />
    </SkeletonWrapper>
  );
};

export default ProjectsSkeleton;
