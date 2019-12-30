import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top"> 
            {/* https://react-bootstrap.github.io/components/navbar/ */}
            <Navbar.Brand href="#home">
                <img
                    src="/logo.svg" 
                    width="390" //will put text in middle; dunno if this will image later image
                    className="d-inline-block align-top"
                    alt="GDC^2 logo"
                /> 
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#schedule">SCHEDULE</Nav.Link>
                <Nav.Link href="#sign-up">SIGN UP</Nav.Link>
                <Nav.Link href="#join">JOIN</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;