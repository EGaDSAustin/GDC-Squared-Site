import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import Text from '../components/Text';
import Header from '../components/Header';

import lol from '../lol.png'
  




const About = (props) => {
    
    return (
        <div id='about'>
            <Container fluid='true'>
                <Row>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: 'rgba(221,85,85,0.5)',
                                padding: '10px 400px',
                            }}>
                            What Is GDC<sup>2</sup>?
                            </span>
                        </Header>
                    </Col>
                </Row>
            </Container>
            <Container fluid='true'>
                <Row>
                    <Col>
                    <Text style = {{
                      fontSize:28,
                      padding: '2vw',
                      fontStretch: 'ultra-expanded',
                      textAlign: 'justify',
                      color: '#110a0a',
                      fontFamily: 'Tahoma, Geneva, sans-serif',
                      backgroundColor: 'rgba(255,238,238,0.5)',
                      padding: '10px 20px',
                    }}>
                        GDC<sup>2</sup> is an EGaDS! hosted event focused on the
                        practices and technology used in the moder games
                        industry, similar to the well known Game Developers
                        Conference. We'll have a number of industry speakers
                        come and give interesting talks on technology and
                        practices in the game industry, as well as an arcade of
                        member projects. Lunch will be provided.
                   
                        <br/><br/>Hope to see you there!
                    </Text>
                    </Col>
                    <Col>
                        <span style={{
                            backgroundColor: 'rgba(255,238,238,0.5)',
                            padding: '100px 0px',
                        }}>
                        <img src={lol} width='100%'/>
                        </span>
                    </Col>
                </Row>
            </Container>
            <Container fluid='true'>
                <Row>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: 'rgba(221,85,85,0.5)',
                                padding: '10px 400px',
                            }}>
                            </span>
                        </Header>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;