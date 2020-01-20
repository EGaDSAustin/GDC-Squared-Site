import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Header from '../components/Header';
import Text from '../components/Text';

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

const pictureList = [
  {
    name: 'Picture Slide 1',
    img: './photos/51958000_308670329851690_6361093117973626880_n.jpg',
    altText: 'Picture Slide 1'
  },
  {
      name: 'Picture Slide 2',
      img: 'holder.js/100px250',
      altText: 'Picture Slide 2'
  },
  {
      name: 'Picture Slide 3',
      img: 'holder.js/100px250',
      altText: 'Picture Slide 3'
  },
]



const Pictures = (props) => {
  return (
    <div>
      <Header>GDC<sup>2</sup></Header>
      <div bsPrefix="subpage1-row">
        <Header primary center>Be there or be SQUARED<sup>2</sup> (he he get it)</Header>
        <Text primary center style={{color:"black"}}>February 22, 2020</Text>
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