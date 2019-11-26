import './App.css';
import {Navbar, Container, Row, Col, Nav, Media} from 'react-bootstrap';
import React from 'react';
import About from './subpages/About'
import Schedule from './subpages/Schedule'
import SignUp from './subpages/SignUp'
import Sponsors from './subpages/Sponsors'

function App() {
  return (
    <>
      <Container bsPrefix="app-container">
        <Row>
          <Col>
            <Media>
              <img alt="iso art"/>
            </Media>
          </Col>
          <Col>
            <Navbar>
            {/* https://react-bootstrap.github.io/components/navbar/ */}
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#sign-up">Sign up</Nav.Link>
              <Nav.Link href="#join">Join</Nav.Link>
            </Nav>
            </Navbar>
          </Col>
        </Row>
        <Row bsPrefix="subpage1-row subpage">
          <About    />
        </Row>
        <Row bsPrefix="subpage2-row subpage">
          <Schedule />
          <SignUp   />
        </Row>
        <Row bsPrefix="subpage3-row subpage">
          <Sponsors />
        </Row>
      </Container>
    </>
    );
}

export default App;
