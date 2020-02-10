import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../components/Text';
import Header from '../components/Header';

import lol from '../lol.png'
  




const About = (props) => {
    
    return (
        <div id='about'>
            <Container fluid='true'>
                <Row style={{padding:'2vw'}}>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: '#60666C',
                                padding: '1vw 12vw',
                                borderRadius: '8px'
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
                      fontSize:'1.5vw',
                      padding: '2vw',
                      fontStretch: 'ultra-expanded',
                      textAlign: 'justify',
                      color: '#ffffff',
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: '#60666C',
                      padding: '2vw 2vw',
                      borderRadius: '16px'
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
                        <img src={lol} width='100%'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;