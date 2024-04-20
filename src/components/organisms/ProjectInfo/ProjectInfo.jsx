const ProjectInfo = ({ project }) => {
    return (
        <>
            <h1>Project ID: {project.id}</h1>
            <h2>Project Name: {project.name}</h2>
            <div>
                <h3>Description:</h3>
                {project.descriptions}
            </div>
        </>
    );
}

export default ProjectInfo;