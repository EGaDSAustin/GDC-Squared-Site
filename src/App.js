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
        <h1>yo</h1>
        <p>Hi!</p>
        <p>bye!</p>
      </Row>
      <ButtonToolbar>
        <Button variant = "primary"> Blue!</Button>
        {/* put the button stuff here */}
      </ButtonToolbar>
      
    </Container>
    );
}

export default App;
