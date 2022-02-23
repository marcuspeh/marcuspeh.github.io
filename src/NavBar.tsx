import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';

const NavBar: React.FC = (): JSX.Element => {
    return (
        <Navbar bg="light" expand="md">
            <Container className="d-none d-lg-block d-xl-block">
                <Row>
                    <Col style={{ textAlign: "left" }}>
                        <Nav className="justify-content-start">
                            <Nav.Link href="#home">Project</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        <Nav>
                            <Nav.Link href="#home">
                                <Row>
                                    <h3 style={{margin: 0}}>Marcus Peh</h3>
                                </Row>
                                <Row>
                                    <span>Computer Science Undergraduate</span>
                                </Row>    
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Contact</Nav.Link>
                            <Nav.Link href="#link">Resume</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <Container className=".d-block d-lg-none d-xl-none">
                <Navbar.Brand href="#home">
                    Marcus Peh
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Project</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );  
}

export default NavBar;
