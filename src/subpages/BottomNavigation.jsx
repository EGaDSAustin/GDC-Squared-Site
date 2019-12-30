import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../components/Text';
import Media from 'react-bootstrap/Media';            

const mediaList = [
    {
        name: 'Twitter',
        img: 'img-src',
        altText: 'twitter'
    },
    {
        name: 'Instagram',
        img: 'img-src',
        altText: 'instagram'
    },
    {
        name: 'Facebook',
        img: 'img-src',
        altText: 'facebook'
    },
]

const SocialMedia = ({media}) => {
    return (
        <Col>
            <Media>
                <img src={media.img} alt={media.altText} />
            </Media>
        </Col>
    );
}

const SocialMedias = (props) => {
    return (
        <Row>
            <Col>
                <Text>Join EGaDS!</Text>
            </Col>
            {mediaList.map((m, idx) => <SocialMedia media={m} key={idx}/>)}
        </Row>
    );
}

const BottomNavigation = (props) => {
    return (
        <Row>
            <Col>
              <Navbar>
                  <Navbar.Brand>
                    <img
                      src="/logo.svg" 
                      width="390" //will put text in middle; dunno if this will image later image
                      className="d-inline-block align-top"
                      alt="GDC^2 logo"
                    /> 
                  </Navbar.Brand>
                </Navbar>
            </Col>
            <Col>
                <SocialMedias />
            </Col>
        </Row>
    );
}

export default BottomNavigation;