import { gql } from "@apollo/client";

import ProjectInfo from "../fragments/projectFragment";

export default gql`
  ${ProjectInfo}
  query Projects {
    projects {
      ...ProjectInfo
    }
  }
`;
