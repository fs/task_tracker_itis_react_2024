import React from "react";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectInfo = ({ project }) => {
    return (
        <Card>
            <Card.Header>Project name: {project.name}</Card.Header>
            <Card.Body>
                <Card.Title>Project description</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Link to="/projects">
                    <Button variant="primary">Go back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ProjectInfo;