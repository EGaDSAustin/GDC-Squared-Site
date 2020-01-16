import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../components/Text';
import Media from 'react-bootstrap/Media';            

const mediaList = [
    {
        name: 'Facebook',
        img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png',
        ref: 'https://www.facebook.com/groups/egadsaustin/',
        altText: 'facebook'
    },
    {
        name: 'Discord',
        img: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png',
        ref: 'https://discord.gg/4ShtMPx',
        altText: 'discord'
    },
    {
        name: 'Youtube',
        img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png',
        ref: 'https://www.youtube.com/user/egadsaustin',
        altText: 'youtube'
    },
    {
        name: 'Twitter',
        img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png',
        ref: 'https://twitter.com/EGaDSAustin',
        altText: 'twitter'
    },
]

const SocialMedia = ({media}) => {
    return (
        <Col>
            <Media>
                <a href={media.ref}><img style={{
                    height:40, width:40, alignContent:'center'
                }} src={media.img} alt={media.altText}/></a>
            </Media>
        </Col>
    );
}

const SocialMedias = (props) => {
    return (
        <Row>
            <Col>
                <Text center>Join EGaDS!</Text>
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