import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import "./navbar.css"

function navbar() {
    return (

        <Container fluid className="nav-bar ">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img className="brand-img" src="/images/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Healthy Diet</Nav.Link>
                        <Nav.Link href="#Curd">Curd</Nav.Link>
                        <Nav.Link href="#Cheese">Cheese</Nav.Link>
                        <Nav.Link href="#Weight">Weight Loss</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    )
}

export default navbar
