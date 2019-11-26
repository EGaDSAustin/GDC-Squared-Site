import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = (props) => {
    
    return (
        <div>
            <h1 id="subpage-header">What is GDC^2?</h1>
            <Container fluid='true'>
                <Row>
                    <Col>
                    <p>
                        GDC^2 is an EGaDS! hosted event focused on the
                        practices and technology used in the moder games
                        industry, similar to the well known Game Developers
                        Conference. We'll have a number of industry speakers
                        come and give interesting talks on technology and
                        practices in the game industry, as well as an arcade of
                        member projects. Lunch will be provided.
                    </p>
                    <p>
                        Hope to see you there!
                    </p>
                    </Col>
                    <Col>
                        Pictures here!
                        {/* we can put the pictures here*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;