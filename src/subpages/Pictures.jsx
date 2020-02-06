import React from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Splash from '../splash.png'
import Logo from '../Logo.png';

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
        {/* <img src={Logo} style={{ display:'block',marginLeft: 'auto', marginRight: 'auto', alignContent:'center', width: '40vw'}}/> */}
        <Text primary center>February 22, 2020</Text>
      </div>
     
      
    </div>
    
  );
}

export default Pictures;