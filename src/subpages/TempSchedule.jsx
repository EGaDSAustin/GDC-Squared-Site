import React from 'react';
import Text from '../components/Text';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUp from './SignUp';


function TempSchedule (props) {
    return <div id='schedule'>
            <Container style={{padding: '4vw', backgroundColor:'#4e5358',borderRadius: '16px'}}>
                <Row>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: '#60666C',
                                padding: '1vw 12vw',
                                borderRadius: '8px'
                            }}>
                            Schedule
                            </span>
                        </Header>
                    </Col>
                </Row>
                <Row style={{padding: '1vw'}}>
                    <Col>
                    <Text center primary>
                    <span style={{
                                backgroundColor: '#60666C',
                                padding: '1vw 6vw',
                                borderRadius: '32px'
                            }}>
                            Coming Soon! Join the <a href={'https://discord.gg/4ShtMPx'}>Discord</a> for Anouncements!
                            </span> 
                        </Text>
                    </Col>
                </Row>
                <Row style={{padding: '2vw'}}>
                    <Col>
                        <SignUp   />
                    </Col>
                </Row>
            </Container>
            
            
        </div>
}



export default TempSchedule;