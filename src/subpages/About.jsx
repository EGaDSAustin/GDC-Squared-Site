import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Text from '../components/Text';

const About = (props) => {
    
    return (
        <div>
            <h1 id="subpage-header">What is GDC^2?</h1>
            <Container fluid='true'>
                <Row>
                    <Col>
                    <Text>
                        GDC^2 is an EGaDS! hosted event focused on the
                        practices and technology used in the moder games
                        industry, similar to the well known Game Developers
                        Conference. We'll have a number of industry speakers
                        come and give interesting talks on technology and
                        practices in the game industry, as well as an arcade of
                        member projects. Lunch will be provided.
                    </Text>
                    <Text>
                        Hope to see you there!
                    </Text>
                    </Col>
                    <Col>
                        Pictures here!
                        {/*currently this photo is broken but easily changed*/}
                        <Image src= "holder.js/100px/250" rounded /> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;