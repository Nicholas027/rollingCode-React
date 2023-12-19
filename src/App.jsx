import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "./App.css"

function App() {

  return (
    <>
      <Container className="my-4 app">
        <h1 className="text-center text-light display-3">Lista de tareas</h1>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
