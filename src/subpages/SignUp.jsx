import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

import Button from '../components/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const SignUp = (props) => {

    return (
        <div>
            <Container bsPrefix="signUpButton-container" id='sign-up'>
                <Row>
                    <Col>
                        <ButtonToolbar bsPrefix="signUp-btn-group">
                            <Button bsPrefix="signUp-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSduM6WAULZhnz3UkKW0Is_bRiAVzj5n6U6NdVUe_6a1Er1YoQ/viewform">Click here to be a speaker!</Button>
                            <Button bsPrefix="signUp-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfWSydDpop9RNqXLn38t4BzoH5MNUeVd5GKsvzS2wMFGimFMg/viewform"> Click here to showcase your work!</Button>
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