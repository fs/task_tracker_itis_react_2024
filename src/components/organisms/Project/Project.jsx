import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableCol } from './styled';


const Project = ({ project }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
          </tr>
        </thead>

        <tbody>
              <tr key={project.id}>
                <TableCol>{project.name}</TableCol>
                <TableCol>{project.description}</TableCol>
              </tr>
        </tbody>
      </Table>
      <p>Tasks скоро будут тут</p>
      <Link to="/projects"><Button variant="light">Назад к проектам.</Button></Link>
      </>
  );
};

export default Project;
