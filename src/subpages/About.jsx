import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import Text from '../components/Text';
import Header from '../components/Header';


  




const About = (props) => {
    
    return (
        <div id='about'>
            <Header primary>What is GDC<sup>2</sup>?</Header>
            <Container fluid='true'>
                <Row>
                    <Col>
                    <Text style = {{
                      fontSize:28,
                      padding: '2vw',
                      fontStretch: 'ultra-expanded',
                      textAlign: 'justify',
                      color: 'white',
                      fontFamily: 'Tahoma, Geneva, sans-serif'
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;