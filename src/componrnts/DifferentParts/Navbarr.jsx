import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ReducerExapmle1 from '../Hooks/UseReducer/ReducerExapmle1';
 
export const Navbarr = () => {
   return (
<Navbar expand="lg" className="text-bg-light shadow mb-3 border rounded-4">
      <Container>
        <Navbar.Brand href="#home">Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link >link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
               <NavDropdown.Item >useReducer</NavDropdown.Item> 
 
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    )
 }
 
