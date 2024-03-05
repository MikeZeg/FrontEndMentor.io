import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import myData from '../API/GeoAPI.js';
import {buttonAPI} from '../API/GeoAPI.js' 
import { useEffect, useState } from 'react';

const  App = () => {

  const {city, country_name, lat,lng,region,timezone} = myData.location
  
  console.log(city)

  return (
    <div >
        <Header 
          ip={myData.ip}
          isp={myData.asn}
          city={city}
          country_name = {country_name}
          region = {region}
          timezone = {timezone}
        />
        <Main
        lat={lat}
        lng={lng}
        />
        <Footer/>
    </div>
  );
}

export default App;
