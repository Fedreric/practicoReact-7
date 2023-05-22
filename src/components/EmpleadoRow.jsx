import { ListGroup, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <ListGroup.Item className="my-1">
      <article className="row align-items-center">
        <div className="col-4 col-md-2">
          <EmpleadoAvatar avatar={empleado.pic} />
        </div>
        <div className="col-8 col-md-10">
          <p>{empleado.fullName}</p>
          <strong>{empleado.title}</strong>
          <Badge className="mx-1">{empleado.department}</Badge>
        </div>
      </article>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
