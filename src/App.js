import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import React from 'react';
import About from './subpages/About'
import Schedule from './subpages/Schedule'
import SignUp from './subpages/SignUp'
import Sponsors from './subpages/Sponsors' 
import Navigation from './subpages/Navigation'
import Text from './components/Text';


function ScrollToTop() {
  window.scrollTo({top: 0, behavior:'smooth'});
}

function App() {
  return (
    
      <Container bsPrefix="app-container">
        <Row>
          <Col>
              <Navigation/>
          </Col>
        </Row>
        <Row>
          {/*insert image w/ GDC^2*/}
          <Container>
            <Image src = "holder.js/100px250" fluid/>
            <h2 class="text-center">GDC^2</h2>
            <Text class = "text-center">February XXth - XXth 2020</Text>
          </Container>
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
    
    );
}

export default App;
