import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Header from '../components/Header';
import Text from '../components/Text';
import Container from 'react-bootstrap/Container';

const pictureList = [
  {
    name: 'Picture Slide 1',
    img: 'holder.js/100px250',
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

const PictureSlide = ({picture}) => {
  return (
      <Carousel.Item>
        <Image src={picture.img} alt={picture.altText} fluid/>
      </Carousel.Item>
  );
}

const Pictures = (props) => {
  return (
    <div>
      <Header>GDC<sup>2</sup></Header>
      <Text primary center>February XXth - XXth 2020</Text>
      <Carousel>
        {pictureList.map((p,idx) => <PictureSlide picture={p} key={idx}/>)}
      </Carousel>
    </div>
    
  );
}

export default Pictures;