import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const sponsorList = [
    {
        name: 'Niantic',
        img: 'img-src',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'img-src',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'img-src',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'img-src',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'img-src',
        altText: 'niantic'
    },
    {
        name: 'Niantic',
        img: 'img-src',
        altText: 'niantic'
    },
]

const Sponsor = ({sponsor}) => {
    return (
        <Col>
            <Media>
                <img src={sponsor.img} alt={sponsor.altText} />
            </Media>
        </Col>
    );
}

const Sponsors = (props) => {
    return (
        <div>
            <h6>OUR SPONSORS</h6>
            <Container>
                <Row>
                    {sponsorList.map((s, idx) => <Sponsor sponsor={s} key={idx}/>)}
                </Row>
                <Row>
                    <Col>
                        <Media>
                            <img alt="iso logo"/>
                        </Media>
                    </Col>
                    <Col>
                        Join EGaDS!
                    </Col>
                    <Col>
                        <Media>
                            <img alt="twitter"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="instagram"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="facebook"/>
                        </Media>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;