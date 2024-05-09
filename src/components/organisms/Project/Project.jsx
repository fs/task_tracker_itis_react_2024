import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Project = ({ project }) => {

  return (
    <Container>
      <Row>
        <Col>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;