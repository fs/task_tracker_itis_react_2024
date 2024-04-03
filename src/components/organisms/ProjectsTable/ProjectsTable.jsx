import { mockProjects } from './mockProjects';
import Button from '../../atoms/Button';

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
                <Button label="Edit" onClick={() => {}} color="#00ff00" />
                <Button label="Show" onClick={() => {}} color="#0000ff" />
                <Button label="Delete" onClick={() => {}} color="#ff0000" />
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProjectsTable;
