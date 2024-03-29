// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar>
                <Container>
                    <Navbar.Brand href="/">React app example</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/info">Info</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
    );
}

export default Header;