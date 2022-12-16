import React from "react"
import "./App.css";
import {CrudForm} from "./components/crud/CrudForm";
import {CrudTable} from "./components/crud/CrudTable";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {Container, Navbar, Nav} from "react-bootstrap" 
import { ContactoUpdate } from "./components/crud/CrudUpdate";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar  className="navbar">
        <Container>
          <Nav variant="pills" activeKey="1" className="me-auto">
            <Nav.Link eventKey="link-1" className="navbar-brand" as={Link} to="/">Agenda de Contatos</Nav.Link>
            <Nav.Link className="navbar-brand" as={Link} to="/CrudForm">Cadastrar</Nav.Link>
          </Nav>
        </Container>   
      </Navbar> 
    <Routes>
    <Route path="/" index element={<CrudTable/>}/>
    <Route path="/CrudForm" element={<CrudForm/>}/>
    <Route path="/CrudUpdate/:id" element={<ContactoUpdate/>}/>
    <Route path="/" index element={<ContactoUpdate/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
