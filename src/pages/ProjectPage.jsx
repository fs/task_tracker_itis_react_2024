import React from "react";
import { useParams } from "react-router-dom";

import ProjectInfo from "src/components/organisms/ProjectInfo";
import Error from "src/components/atoms/Error";
import Loader from "src/components/atoms/Loader";

import { useProject } from "../lib/hooks/project";

import DefaultTemplate from "../components/templates/DefaultTemplate";

const ProjectPage = () => {
    const { id } = useParams()
    const { project, loading, error } = useProject({projectId: id})
    console.log(project)

    return(
        <DefaultTemplate>
            <h2> Project info</h2>
            {error && !loading && 
                <div>
                    <Error errorText={error}/>
                </div>}

            {loading && 
                <center>
                    <Loader/>
                </center>}

            {project && !loading && <ProjectInfo project={project} />}
        </DefaultTemplate>
    );
};
export default ProjectPage;