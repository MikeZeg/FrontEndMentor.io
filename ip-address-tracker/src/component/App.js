import React, { useEffect, useState } from 'react';

import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import { InputForm } from './Header';
import { useButtonAPI } from '../API/GeoAPI.js'
import {handleSubmit} from '../component/Header.js'

const  App = () => {

  const  [data, setData] = useButtonAPI('');
  const [ipFromHeader, setIpFromHeader] = useState('');



  console.log('App: ------>>>>', data);
  console.log('App !!--> Received IP from Head:', ipFromHeader);

  useEffect(()=>{
    console.log('Change Ip from Header')

  },[])

  useButtonAPI(ipFromHeader)
  // Now we need to send value to useButtonAPI

  return ( 
    <div >
        <Header
        changeIp = {ip => setIpFromHeader(ip)}

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