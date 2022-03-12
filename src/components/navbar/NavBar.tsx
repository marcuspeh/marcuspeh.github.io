import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const NavBar: React.FC = (): JSX.Element => {
    return (
        <Navbar bg="light" expand="md" className='mb-4'>
            <Container className="d-none d-lg-block d-xl-block">
                <Row>
                    <Col className="align-self-center">
                        <Nav className="justify-content-start">
                            <Nav.Link href="/project">Project</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="align-self-center">
                        <Nav className="justify-content-center" style={{textAlign:"center"}}>
                            <Nav.Link href="/">
                                <Row style={{margin: 0}}>
                                    <h3 style={{margin: 0, padding: 0}}>Marcus Peh</h3>
                                    <span style={{padding: 0}}>Computer Science Undergraduate</span>
                                </Row> 
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="align-self-center">
                        <Nav className="justify-content-end">
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <Container className=".d-block d-lg-none d-xl-none">
                <Navbar.Brand href="/">
                    Marcus Peh
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/project">Project</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );  
}

export default NavBar;
