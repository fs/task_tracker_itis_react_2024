// eslint-disable-next-line import/named
import {ProjectDescription, ProjectTitle} from "./styled";


const ProjectInfo = ({ project }) => {

  return (
    <>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
    </>
  );
};

export default ProjectInfo;
