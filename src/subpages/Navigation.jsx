import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../logo.png';

const Navigation = (props) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top"> 
            {/* https://react-bootstrap.github.io/components/navbar/ */}
            <Navbar.Brand href="#home">
                <img
                    src={Logo} 
                    width="80vh"
                    className="d-inline-block align-top"
                    alt="GDC^2 logo"
                /> 
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#pictures">PICTURES</Nav.Link>
                <Nav.Link href="#schedule">SCHEDULE</Nav.Link>
                <Nav.Link href="#sign-up">SIGN UP</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;