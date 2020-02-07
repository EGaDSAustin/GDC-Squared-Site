import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Header from '../components/Header';

const sponsorList = [
    {
        name: 'Niantic',
        img: 'http://utgamejam.com/can.fa4a2f1e.png',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'http://utgamejam.com/phone.0387d672.png',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'http://utgamejam.com/pen.8c1d39a4.png',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'http://utgamejam.com/keyboard.644f631e.png',
        altText: 'niantic'
    },
    
]

const Sponsor = ({sponsor}) => {
    return (
        <Col style={{display:'flex', justifyContent:"center"}}>
            <Media>
                <img src={sponsor.img} alt={sponsor.altText} height='80px' width='80px'/>
            </Media>
        </Col>
    );
}

const Sponsors = (props) => {
    return (
        <div id='sponsors'>
            <Container>
            <Row style={{padding:'2vw'}}>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: '#60666C',
                                padding: '1vw 12vw',
                                borderRadius: '8px'
                            }}>
                            Our Sponsors
                            </span>
                        </Header>
                    </Col>
                </Row>
                <Row>
                    {sponsorList.map((s, idx) => <Sponsor sponsor={s} key={idx}/>)}
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;