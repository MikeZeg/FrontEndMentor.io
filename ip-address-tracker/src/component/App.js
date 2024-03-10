import React from 'react';

import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import {useButtonAPI} from '../API/GeoAPI.js' 
import { useEffect, useState } from 'react';

const  App = (props) => {
  
  return ( 
    <div > 
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}


export default App;