import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Logo from '../logo.png';

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
            {mediaList.map((m, idx) => <SocialMedia media={m} key={idx}/>)}
        </Row>
    );
}

const BottomNavigation = (props) => {
    return (
        <div style={{padding:'2vw'}}>
        <Row style={{backgroundColor:'#60666C', borderRadius: '4px'}}>
            <Col sm={4}>
              <Navbar>
                  <Navbar.Brand>
                    <img
                      src={Logo} 
                      width="200vh"
                      className="d-inline-block align-top"
                      alt="GDC^2 logo"
                    /> 
                  </Navbar.Brand>
                </Navbar>
            </Col>
            <Col sm={8} >
                <div style={{padding:'5.2vh'}}>
                    <SocialMedias />    
                </div>
            </Col>
        </Row>
        </div>
    );
}

export default BottomNavigation;