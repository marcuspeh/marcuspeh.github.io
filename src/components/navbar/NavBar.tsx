import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import useWindowDimensions from '../../utilities/windowDimension'

const NavBar: React.FC = (): JSX.Element => {
    const { height, width } = useWindowDimensions()
    
    if (width >= 1200) {
         return (
            <Navbar bg="light" expand="md" className='mb-4'>
                <Container className="d-none d-lg-block d-xl-block">
                    <Row>
                        <Col className="align-self-center">
                            <Nav className="justify-content-start">
                                <Nav.Link href="/project">Project</Nav.Link>
                                <Nav.Link href="/experience">Experience</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="align-self-center">
                            <Nav className="justify-content-center" style={{textAlign:"center"}}>
                                <Nav.Link href="/">
                                    <Row style={{margin: 0}}>
                                        <h3 style={{margin: 0, padding: 0}} className="maroon">Marcus Peh</h3>
                                    </Row> 
                                </Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="align-self-center">
                            <Nav className="justify-content-end">
                                <Nav.Link href="/background">Background</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                <Container className=".d-block d-lg-none d-xl-none">
                    <Navbar.Brand href="/" className="maroon">
                        <p className="maroon bold">Marcus Peh</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="/project">Project</Nav.Link>
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/background">Background</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );  
    } else {
        return (
            <Navbar bg="light" expand="md" className='mb-4'>
                <Container>
                    <Navbar.Brand href="/" className="bold">
                        <div className='maroon'>Marcus Peh</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="/project">Project</Nav.Link>
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/background">Background</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );  
    }
}

export default NavBar;
