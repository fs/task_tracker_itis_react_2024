import React from "react";
import { SkeletonWrapper, TableCol, TableColActions, TableHead, Table } from "./styled";

const ProjectSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div className="my-3">
        <Table>
          <thead>
            <tr>
              <TableHead>id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <tr key={item}>
                <TableCol>
                  <div className="skeleton-line" style={{ width: "20px" }} />
                </TableCol>
                <TableCol>
                  <div className="skeleton-line" style={{ width: "70px" }} />
                </TableCol>
                <TableCol>
                  <div className="skeleton-line" style={{ width: "900px" }} />
                </TableCol>
                <TableColActions>
                  <div className="skeleton-button" style={{ width: "70px", height: "35px" }} />
                  <div className="skeleton-button" style={{ width: "70px", height: "35px" }} />
                  <div className="skeleton-button" style={{ width: "70px", height: "35px" }} />
                </TableColActions>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </SkeletonWrapper>
  );
};

export default ProjectSkeleton;
