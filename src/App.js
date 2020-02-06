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
 *  dumb stylin tings
 *  asssssets
 *  carousel captions
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
        <Row bsPrefix="subpage1-row subpage">
          <Splash   />
        </Row>
        <Row bsPrefix="subpage2-row subpage">
          <About    />
        </Row>
        <Row bsPrefix="subpage1-row subpage">
          <Pictures />
        </Row>
        <Row bsPrefix="subpage2-row subpage">
          {/* <Schedule /> */}
          <TempSchedule />
        </Row>
        <Row bsPrefix="subpage3-row subpage">
          <Sponsors />
          <BottomNavigation />
        </Row>
      </Container>
    
    );
}

export default App;
