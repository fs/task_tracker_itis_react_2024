import Button from 'react-bootstrap/Button';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = ({projects, onDelete}) => {

  return (
    <Table>
      <thead>
        <tr>
          <TableHead>id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </tr>
      </thead>

      <tbody>
        {mockProjects.map(({ id, name, description }) => {
          return (
            <tr key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <Button variant="btn btn-outline-primary" onClick={() => {}}>Edit</Button>
                <Button variant="btn btn-outline-warning" onClick={() => {}}>Show</Button>
                <Button variant="btn btn-outline-danger" onClick={() => onDelete(id)}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProjectsTable;
