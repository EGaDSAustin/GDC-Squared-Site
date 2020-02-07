import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Header from '../components/Header';
import Button from '../components/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const SignUp = (props) => {

    return (
        <div>
            <Container bsPrefix="signUpButton-container" id='sign-up'>
                <Row>
                    <Col style={{padding: '1px'}}>
                        <Header>
                            <span style={{
                                backgroundColor: '#60666C',
                                padding: '1vw',
                                borderRadius: '8px'
                            }}>
                            Sign Up!
                            </span>
                        </Header>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex',justifyContent: 'center', alignItems: 'center', padding: '8px'}}>
                        <Media>
                        <img src='http://utgamejam.com/raccoon.6c57d67e.png'/>
                        </Media>
                    </Col>
                </Row>
               
                <Row style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                    <Col style={{padding: '4px'}}>
                        <Button bsPrefix="signUp-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSduM6WAULZhnz3UkKW0Is_bRiAVzj5n6U6NdVUe_6a1Er1YoQ/viewform">Click here to be a speaker!</Button>
                    </Col>
                    <Col style={{padding: '4px'}}>
                    <Button bsPrefix="signUp-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfWSydDpop9RNqXLn38t4BzoH5MNUeVd5GKsvzS2wMFGimFMg/viewform"> Click here to showcase your work!</Button>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default SignUp;