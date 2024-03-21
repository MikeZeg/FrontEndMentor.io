import React, { useState } from 'react';

import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import {useButtonAPI} from '../API/GeoAPI.js' 

const  App = () => {

  const  [data,setData, fetchData] = useButtonAPI('');

  console.log(useButtonAPI)
  console.log('App: ------>>>>', data)

  return ( 
    <div > 
        <Header
          // ip = {data.ipAddress}
          // city = {data.cityName}
          // country_name = {data.countryName}
          // region = {data.regionName}
          // timezone = {data.timeZone}
        // ---------------------

        ip = {data.ipAddress}
        city = {data.cityName}
        country_name = {data.countryName}
        region = {data.regionName}
        timezone = {data.timeZone}
        asn = {data.org}
        />
        <Main
            latitude = {data.latitude}
            longitude = {data.longitude}
            ip = {data.ip}
            cityName = {data.cityName}
        />
        <Footer/>
    </div>
  );
}

export default App;