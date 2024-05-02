import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectInfo = ({ project }) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{project.name}</h2>
                    <p style={{ fontSize: '16px', color: 'black' }}>{project.description}</p>
                </Col>
            </Row>
        </Container>
    );
};
  
  export default ProjectInfo;