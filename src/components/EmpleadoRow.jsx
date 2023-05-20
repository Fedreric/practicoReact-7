import { ListGroup, Badge } from "react-bootstrap";

const EmpleadoRow = ({empleado}) => {
    const listaEmpleados = empleado;

    return (
        <ListGroup.Item>
            <p>{listaEmpleados[0].fullName}</p>
            <b>{listaEmpleados[0].title}</b> <Badge>{listaEmpleados[0].department}</Badge>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;