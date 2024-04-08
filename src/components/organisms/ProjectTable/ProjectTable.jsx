import { useState } from "react";
import { data } from "./data";
import PrettyButton from "../../atoms/PrettyButton";
import { Table, TableCol, TableColActions, TableHead, TableRow } from "./styled";
import MyModal from "../../molecules/MyModal";


const ProjectTable = () => {
  const [confirm, setConfirm] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const handleClose = () => {
    setModalInfo(null);
    setConfirm(false);
  };
  const handleShow = (name) => {
    setModalInfo(name);
    setConfirm(true);
  };


  return (
    <>
      <Table>
        <thead>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
        </thead>
        <tbody>
        {data.map(({ id, name, description }) => {
          return (
            <TableRow key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <PrettyButton color="blue" label="Tasks" />
                <PrettyButton color="rebeccapurple" label="Edit" />
                <PrettyButton color="red" label="Destroy" onClick={() => {
                  handleShow({ name });
                }} />
              </TableColActions>
            </TableRow>
          );
        })}

        </tbody>
      </Table>
      { (confirm && <MyModal stateShow={confirm} textBody={`Вы действительно хотите удалить ${modalInfo.name}?`}
                           textCloseButton="Закрыть" textConfirmButton="Удалить" handleClose={handleClose} />)
      }
    </>
  );
};

export default ProjectTable;