import './App.css';
import {Navbar,Container, Row, Column, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';

function App() {
  

  return (
    <Container>
      <Navbar>
        {/* https://react-bootstrap.github.io/components/navbar/ */}
        
      </Navbar>
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
      
    </Container>
    );
}

export default App;
