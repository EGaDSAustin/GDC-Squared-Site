import './App.css';
import { Container, Row } from 'react-bootstrap';
import React from 'react';
import About from './subpages/About'
import Schedule from './subpages/Schedule'
import SignUp from './subpages/SignUp'
import Sponsors from './subpages/Sponsors'
import Navigation from './subpages/Navigation'
import BottomNavigation from './subpages/BottomNavigation'
import Pictures from './subpages/Pictures'
import HashLinkObserver from 'react-hash-link'
import TempSchedule from './subpages/TempSchedule';
import Splash from './subpages/Splash'

/**
 * TODO:
 * Mobile styling
 */

  
function ScrollToTop() {
  window.scrollTo({top: 0, behavior:'smooth'});
}

function App() {
  return (
      <Container bsPrefix="app-container">
        <HashLinkObserver smoothScroll/>
        <Row bsPrefix='top-row'>
          <Navigation/>
        </Row>
        <Row bsPrefix="subpage">
          <Splash   />
        </Row>
        <Row bsPrefix="subpage-2">
          <About    />
        </Row>
        <Row bsPrefix="subpage">
          <Pictures />
        </Row>
        <Row bsPrefix="subpage-2">
          <Schedule />
        </Row>
        <Row bsPrefix="subpage">
          <SignUp/>
        </Row>
        <Row bsPrefix="subpage-2">
          <Sponsors/>
        </Row>
        <Row bsPrefix="subpage-bottom">
          <BottomNavigation />
        </Row>
      </Container>
    
    );
}

export default App;
