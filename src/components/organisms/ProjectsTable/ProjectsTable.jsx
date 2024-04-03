import Button from 'react-bootstrap/Button';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {

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
                <Button variant="primary" onClick={() => {}}>Edit</Button>
                <Button variant="warning" onClick={() => {}}>Show</Button>
                <Button variant="danger" onClick={() => {}}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProjectsTable;
