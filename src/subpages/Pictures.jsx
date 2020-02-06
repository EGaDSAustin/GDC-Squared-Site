import React from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Logo from '../Logo.png';
import Splash from '../splash.png'
import Carousel from 'react-bootstrap/Carousel';

const caption = [
  'Learn new Skills', 'Create projects', 'Meet new People', 'Cool Presentations', 'Technology Talks'
  ,'Information about the industry','Socialize', 'Cool designs', 'Have fun'
];

function importAll(r){
  return r.keys().map((item, idx) => {
    return {
      name: `Picture ${idx}`,
      img: r(item),
      altText: `Picture Slide ${idx}`
    }  
  });
}

const images = importAll(require.context('../photos', false, /\.(png|jpe?g|svg)$/));
const Pictures = (props) => {
  return (
    <div>
      <Carousel
      style={{
        marginTop: '2%'
      }}>
        {images.map((p,idx) => 
        <Carousel.Item key={idx}>
        <div style={{height:'100vh', maxHeight: '25vw', overflow: 'hidden', alignContent: 'center'}}>
          <img
            style={{marginTop: '-20%'}}
            className="d-block w-100"
            src={p.img}
            alt={p.altText}
          />
        </div>
        <Carousel.Caption>
          <h3>{caption[idx]}</h3>
        </Carousel.Caption>
      </Carousel.Item>)}
      </Carousel>
    </div>
    
  );
}

export default Pictures;