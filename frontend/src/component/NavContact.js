import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavContact = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Recette'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/fiches'>Adding</Nav.Link>
            <Nav.Link as={Link} to='/update/:id'>update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavContact