import { Button, Form } from 'react-bootstrap';

function FormularioTarea() {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
        <Form.Control type="text" placeholder="Ej: tarea 1" className='me-2'/>
        <Button type='submit'>Agregar</Button>
      </Form.Group>
    </Form>
  );
}

export default FormularioTarea;