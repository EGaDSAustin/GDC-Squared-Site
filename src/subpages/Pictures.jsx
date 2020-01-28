import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';
import Text from '../components/Text';
import Splash from '../splash.png'
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
      <div
      style={{
        background: `url(${Splash})`,
        backgroundSize: 'cover',
        width : '100vw',
        height : '98vh',
        color  : 'white'
      }}
      >
        <Header primary center style={{color: 'white', paddingBottom:0}}>Be there or be squared</Header>
        <Header>GDC<sup>2</sup></Header>
        <Text primary center>February 22, 2020</Text>
      </div>
      
      <Carousel
      style={{
        marginTop: '2%'
      }}>
        {images.map((p,idx) => 
        <Carousel.Item key={idx}>
        <div style={{height:'72vh', maxHeight: '50vw', overflow: 'hidden', alignContent: 'center'}}>
          <img
            style={{marginTop: '-20%'}}
            className="d-block w-100"
            src={p.img}
            alt={p.altText}
          />
        </div>
        <Carousel.Caption>
          <h3>{p.name}</h3>
          <p>{p.altText}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
      </Carousel>
    </div>
    
  );
}

export default Pictures;