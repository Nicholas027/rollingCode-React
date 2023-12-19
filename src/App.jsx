import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "./App.css"
import FormularioTarea from "./components/FormularioTarea";

function App() {

  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center text-light display-3">Lista de tareas</h1>
        <FormularioTarea/>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
