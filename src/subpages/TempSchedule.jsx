import React from 'react';
import Text from '../components/Text';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUp from './SignUp';


function TempSchedule (props) {
    return <div id='schedule'>
            <Container fluid='true'>
                <Row>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: 'rgba(221,85,85,0.5)',
                                padding: '10px 400px',
                            }}>
                            Schedule
                            </span>
                        </Header>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Text center>
                    <span style={{
                                backgroundColor: 'rgba(255,238,238,0.5)',
                                padding: '10px 20px',
                            }}>
                            Coming Soon! Join the <a href={'https://discord.gg/4ShtMPx'}>Discord</a> for Anouncements!
                            </span> 
                        </Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SignUp   />
                    </Col>
                </Row>
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
}



export default TempSchedule;