import React from 'react'
import art from '../splash.png'
import Header from '../components/Header'
import Text from '../components/Text'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SplashArt from '../splash.png'

const Splash = () => {
    return <div
    style={{
      background: `url(${SplashArt})`,
      backgroundSize: 'cover',
      height : '98vh',
      color  : 'white',
      display: 'flex',
      alignItems: 'center',
      textShadow: '0px 0px 16px #000000'
    }}
    >
      <Container>
        <Row>
          <Col>
              <Header big>GDC<sup>2</sup></Header>
              <Header>
                <span style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: '10px 20px',
                  borderRadius: '8px'
                }}>
                  February 29, 2020
                </span>
              </Header>
              <Header>
                <span style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: '10px 20px',
                  borderRadius: '8px'
                }}>
                  Be There Or Be Squared
                </span>
              </Header>
          </Col>
      </Row>
      </Container>
    </div>;
  
}

export default Splash