import React from "react";
import { useParams } from "react-router-dom";

import ProjectInfo from "src/components/organisms/ProjectInfo";

import DefaultTemplate from "src/components/templates/DefaultTemplate";
import { useProject } from "src/lib/hooks/project";

const ProjectPage = () => {
    const { id } = useParams()
    const { project, loading, error } = useProject(id)

    return(
        <DefaultTemplate>
            <h2> Project info page </h2>
            <h2>{id}</h2>
        </DefaultTemplate>
    );
};
export default ProjectPage;