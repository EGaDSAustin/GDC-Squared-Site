import './App.css';
import {Container, Row, Col, } from 'react-bootstrap';
import React from 'react';
import About from './subpages/About'
import Schedule from './subpages/Schedule'
import SignUp from './subpages/SignUp'
import Sponsors from './subpages/Sponsors' 
import Navigation from './subpages/Navigation'
import BottomNavigation from './subpages/BottomNavigation'
import Pictures from './subpages/Pictures'
import HashLinkObserver from 'react-hash-link'

/**
 * TODO: today:
 *  form creation?
 *  import images into carisol with text?
 *  dynamically load images? https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 * 
 */


function ScrollToTop() {
  window.scrollTo({top: 0, behavior:'smooth'});
}

function App() {
  return (
      <Container bsPrefix="app-container">
        <HashLinkObserver />
        <Row bsPrefix='top-row'>
          <Navigation/>
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
