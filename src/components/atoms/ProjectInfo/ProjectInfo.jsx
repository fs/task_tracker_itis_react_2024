import { useNavigate } from "react-router-dom";
import { Title } from "./styled";
import PrettyButton from "../PrettyButton";

// eslint-disable-next-line camelcase
const ProjectInfo = ({ project_name, project_id }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    // eslint-disable-next-line camelcase
    const path = `/project/:${project_id}`;
    navigate(path);
  };

  return (
    <tr>
      {/* eslint-disable-next-line camelcase */}
      <Title>{project_name}</Title>
      <PrettyButton onClick={routeChange} color="#fff" disable={false} label="Edit" />
    </tr>
  );
};

export default ProjectInfo;