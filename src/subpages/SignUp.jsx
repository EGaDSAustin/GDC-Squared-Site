import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const SignUp = (props) => {

    return (
        <div>
            <Container bsPrefix="signUpButton-container">
                <Row>
                    <Col>
                        <ButtonToolbar bsPrefix="signUp-btn-group">
                            <Button variant = "primary" bsPrefix="signUp-btn"> Click Here To Register</Button>
                            {/*we can link the application here */}
                        </ButtonToolbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonToolbar bsPrefix="signUp-btn-group">
                            <Button variant = "primary" bsPrefix="signUp-btn"> Click Here To Sponsor This Event</Button>
                            {/*we can put the link for sponsors here */}
                        </ButtonToolbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Media bsPrefix="signUp-btn-group">
                            Some Art
                        </Media>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp;