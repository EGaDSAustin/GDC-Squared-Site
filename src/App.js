import './App.css';
import {Navbar,Container, Row, Nav, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import About from './subpages/About'
import Schedule from './subpages/Schedule'
import SignUp from './subpages/SignUp'
import Sponsors from './subpages/Sponsors'
function App() {
  return (
    <>
      <Navbar>
        {/* https://react-bootstrap.github.io/components/navbar/ */}
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#schedule">Schedule</Nav.Link>
          <Nav.Link href="#sign-up">Sign up</Nav.Link>
          <Nav.Link href="#join">Join</Nav.Link>
        </Nav>

      </Navbar>

      <About    />
      <Schedule />
      <SignUp   />
      <Sponsors />

      {/* TODO: REMOVE TEMP CODE */}
      <Row>
        <h1>Welcome to GDC Squared</h1>
        <p>Here we can put more information about the event</p>
      </Row>
      <ButtonToolbar>
        <Button variant = "primary"> Click here if you want to register.</Button>
        {/*we can link the application here */}
      </ButtonToolbar>
      <ButtonToolbar>
        <Button variant = "primary"> Click here if you want to sponsor this event.</Button>
        {/*we can put the link for sponsors here */}
      </ButtonToolbar>
      
    </>
    );
}

export default App;
