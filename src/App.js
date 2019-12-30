import './App.css';
import {Container, Row, Col, Image, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import React from 'react';
import About from './subpages/About'
import Schedule from './subpages/Schedule'
import SignUp from './subpages/SignUp'
import Sponsors from './subpages/Sponsors' 
import Navigation from './subpages/Navigation'
import BottomNavigation from './subpages/BottomNavigation'
import Pictures from './subpages/Pictures'


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
        <Row bsPrefix="subpage2-row subpage">
          <Pictures />
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
          <BottomNavigation />
        </Row>
      </Container>
    
    );
}

export default App;
