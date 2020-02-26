import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Header from '../components/Header';

import Niantic from '../sponsors/niantic.png'
import Riot from '../sponsors/riot.png'
import HOFT from '../sponsors/hoftgamelab.png'
import Kabam from '../sponsors/kabam.png'
import EA from '../sponsors/ea.png'
import Zynga from '../sponsors/zynga.png'

const sponsorList = [
    {
        name: 'Niantic',
        img: Niantic,
        altText: 'Niantic',
        height: '120px',
        width: '100px'
    },
    {
        name: 'Riot',
        img: Riot,
        altText: 'Riot',
        height: '80px',
        width: '120px'
    },
    {
        name: 'EA',
        img: EA,
        altText: 'EA',
        height: '80px',
        width: '80px'
    },
    {
        name: 'HOFT Game Lab',
        img: HOFT,
        altText: 'HOFT',
        height: '80px',
        width: '200px'
    },
    {
        name: 'Zynga',
        img: Zynga,
        altText: 'Zynga',
        height: '80px',
        width: '200px'
    },
    {
        name: 'Kabam',
        img: Kabam,
        altText: 'Kabam',
        height: '100px',
        width: '80px'
    },
]

const Sponsor = ({sponsor}) => {
    return (
        <Col style={{display:'flex', justifyContent:"center"}}>
            <Media>
                <img src={sponsor.img} alt={sponsor.altText} height={sponsor.height} width={sponsor.width}/>
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