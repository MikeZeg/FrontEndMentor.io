import React, { useEffect, useState } from 'react';

import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import { InputForm } from './Header';
import { useButtonAPI } from '../API/GeoAPI.js'
import {handleSubmit} from '../component/Header.js'

const  App = () => {

// data -> received from useButtonAPI
// setIP -> setUp new IP and sending to useButtonAPI
// ipFromHeader -> received IP from Header but Header received from InputForm

  const  [data, setData, setIP] = useButtonAPI('');
  const [ipFromHeader, setIpFromHeader] = useState('');

  console.log('App: ------>>>>', data);
  console.log('App !!--> Received IP from Head:', ipFromHeader);

// UseEffect send data to useButtonAPI by setIP
  useEffect(()=>{
// that sending new IP to useButtonAPI and refresh data on all pages :)
    if(ipFromHeader){
      setIP(ipFromHeader)
    }
  },[ipFromHeader])

  return ( 
    <div >
        <Header
        changeIp = {ip => setIpFromHeader(ip)}

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