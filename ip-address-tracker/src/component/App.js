import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import myData from '../API/GeoAPI.js';
import {buttonAPI} from '../API/GeoAPI.js' 
import { useState } from 'react';

function App() {


  // const [details, setDetails] = useState({
  //   timezone:'',
  //   city:'',
  //   region:'',
  //   country_name:'',
  //   ip:''
  // })
  // const [position, setPosition] = useState({
  //   lat:'',
  //   lng:''
  // })
  const [details, setDetails] = useState({myData})

  


  return (
    <div >
        <Header 
          // ip={myData.ip}
          // ip = {myData}
        />
        <Main
        
        />
        <Footer/>
    </div>
  );
}

export default App;
