import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ProjectCard = styled(Card)`
    width: 30rem;
    border-radius: 10px;
    background-color: #6f42c1;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 20px;
    overflow: hidden;
`;

export const CardHeader = styled(Card.Header)`
    font-size: 2.5rem;
    font-weight: 700;
    background-color: #6610f2;
    border-radius: 10px 10px 0 0;
`;

export const CardBody = styled(Card.Body)`
    padding: 2rem;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    transform: translateY(-10px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const ListGroupItem = styled(ListGroup.Item)`
    font-weight: 400;
    font-size: 1.5rem;
    color: #6f42c1;
`;

export const ListGroupItemLabel = styled.span`
    font-weight: 700;
    font-size: 1.2rem;
    color: #6f42c1;
`;
