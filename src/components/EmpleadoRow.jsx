import { ListGroup, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  const listaEmpleados = empleado;

  return (
    <ListGroup.Item>
      <article className="row align-items-center">
        <div className="col-4 col-md-2">
          <EmpleadoAvatar avatar={listaEmpleados[0].pic} />
        </div>
        <div className="col-8 col-md-10">
          <p>{listaEmpleados[0].fullName}</p>
          <strong>{listaEmpleados[0].title}</strong>
          <Badge className="mx-1">{listaEmpleados[0].department}</Badge>
        </div>
      </article>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
