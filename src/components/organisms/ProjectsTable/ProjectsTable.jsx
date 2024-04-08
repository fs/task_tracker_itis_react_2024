import Button from 'react-bootstrap/Button';

import { useState } from "react";
import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import ModalButton from "../../molecules/ModalButton/ModalButton";


const ProjectsTable = () => {

  const [showModal, setShowModal] = useState(false);

  const handleDeleteButton = () => {
    setShowModal(true);
  }

  const handleClick = () => {
    setShowModal(false)
  }



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
                <Button variant="danger" onClick={handleDeleteButton}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
      ( (
        <ModalButton
          show={showModal}
          onCancel={handleClick}
          onClick={handleClick}
          title="Удаление проекта"
          text="вы уверены что хотите удалить этот проект?"
        />
      ))
    </Table>



  )
}

export default ProjectsTable;
