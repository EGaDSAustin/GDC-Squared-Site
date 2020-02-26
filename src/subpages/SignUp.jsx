import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Header from '../components/Header';
import Button from '../components/Button';
import Arrow1 from '../arrow2.png';
import Arrow2 from '../arrow2flipped.png';

const SignUp = (props) => {

    return (
        <div id='sign-up'>
            <Container bsPrefix="signUpButton-container" >
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
                        <img src='http://utgamejam.com/raccoon.6c57d67e.png' alt="Render the Raccoon!"/>
                        </Media>
                    </Col>
                </Row>
               
                <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{padding: '4px'}}>
                        <Media>
                            <img src={Arrow1} alt="" width="90%"/>
                        </Media>
                    </div>
                    <div style={{padding: '4px'}}>
                        <Button 
                        onClick={() => {window.location.href="https://www.eventbrite.com/e/gdc2-tickets-93865459115"}}>
                            Click here to attend!
                        </Button>
                    </div>
                    <br/>
                    <div style={{padding: '4px'}}>
                        <Button
                        onClick={() => {window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfWSydDpop9RNqXLn38t4BzoH5MNUeVd5GKsvzS2wMFGimFMg/viewform"}}>
                            Click here to showcase your work!
                        </Button>
                    </div>
                    <div style={{padding: '4px'}}>
                        <Media>
                            <img src={Arrow2} alt="" width="90%"/>
                        </Media>
                    </div>
                </div>
                
            </Container>
        </div>
    );
}

export default SignUp;