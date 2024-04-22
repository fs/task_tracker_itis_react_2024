import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./ProjectDetailsPage.css"
// eslint-disable-next-line import/no-named-as-default
import useProjects from "./useProjects";
import Loader from "../../loader/loader";
import Error from "../../error/error";



const Details = () => {
  const { id } = useParams();
  const { project, loading, error } = useProjects(id);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div><Error/></div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

    return (

      <div className="project-details-page">
        <div className="project-details-header">
          <h1>Project Details</h1>
        </div>
        <div className="project-details-content">
          <p>ID: {project.id}</p>
          <p>Name: {project.name}</p>
          <p>Description: {project.description}</p>
        </div>
        <Link to="/projects" className="back-button"><Button variant="btn btn-primary" onClick={() => {}}>Back to Projects</Button></Link>
      </div>

    );

};
export default Details;