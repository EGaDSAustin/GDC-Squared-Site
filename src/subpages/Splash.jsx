import React from 'react'
import art from '../splash.png'
import Header from '../components/Header'
import Text from '../components/Text'

const Splash = () => {
    return <div
    style={{
      background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1) ), url(${art})`,
      backgroundSize: 'cover',
      width : '100vw', 
      height : '98vh',
      color  : 'white',
      textAlign: 'center',
    }}
    >
      <Header primary center style={{color: 'white', paddingBottom:0}}>Be there or be squared</Header>
      <Header>GDC<sup>2</sup></Header>
      <Text primary center>February 22, 2020</Text>
    </div>
}

export default Splash