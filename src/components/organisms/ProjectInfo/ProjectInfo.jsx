const ProjectInfo = ({ project }) => {
  return (
    <div className="project-details">
      <div className="field">
        <span className="label">ID:</span>
        <span className="value">{project.id}</span>
      </div>
      <div className="field">
        <span className="label">Description:</span>
        <span className="value">{project.description}</span>
      </div>
      <div className="field">
        <span className="label">Created At:</span>
        <span className="value">{project.createdAt}</span>
      </div>
      <div className="field">
        <span className="label">Name:</span>
        <span className="value">{project.name}</span>
      </div>
    </div>
  );

};

export default ProjectInfo;