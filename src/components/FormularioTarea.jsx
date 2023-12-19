import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

function FormularioTarea() {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            className="me-2"
          />
          <Button type="submit">Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas />
    </section>
  );
}

export default FormularioTarea;
