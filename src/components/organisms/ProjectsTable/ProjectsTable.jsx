import {useState} from "react";
import { mockProjects } from './mockProjects';
import Button from '../../atoms/Button';


import { Table, TableHead, TableCol, TableColActions } from './styled';

import DeleteModalPopUpWIndow from "../../molecules/DeleteModalPopUpWindow";

const ProjectsTable = () => {

  const ModalClose=()=>{
    setShowDeletedModal(false)
  }
  return (
    <>
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
                <Button variant="danger" onClick={() => DeleteClick({ id, name, description })}>Delete</Button>
            </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>

    <DeleteModalPopUpWIndow
      isVisible={showDeletedModal}
      onHide={ModalClose}
      onDelete={DeleteAccept}
      projectId={selectedProject && setSelectedProject.id}
      />
  </>
  )
}

export default ProjectsTable;
