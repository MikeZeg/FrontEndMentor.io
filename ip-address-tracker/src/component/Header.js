import React, { useEffect, useState } from 'react'
import '../styles/headerStyle.css'
import myData from '../API/GeoAPI.js'
import { buttonAPI } from '../API/GeoAPI.js'
import img from '../images/icon-arrow.svg'


export const InputForm = (props)=> {
    const [ipAddress, setIpAddress] = useState("");
    

    return (
        <form className='form'>
                    <input
                        className='form__input input'
                        type="text"
                        value={ipAddress}
                        placeholder='Search for any IP address or domain'
                        onChange={(e)=> setIpAddress(e.target.value)}
                    />
                    <button className='form__btn btn' onClick={(e)=> buttonAPI(ipAddress,e)} type='subit'>
                        <img className='form__btn__img img' src={img} alt="arrow image" />
                    </button>
        </form>
    )}

export const Info = (props) => {

    console.log('header IP: ', props.ip)
    console.log('header IP: ', props.isn)
    

    const {isp,ip} = myData
    const {timezone,city,region,country_name} = myData.location

    return (
        <section className='headerStyle__info'>
            <h2 className='headerStyle__info__ip box'><span className='top__span'>IP ADDRESS </span><p className='headerStyle___info__IP__p'>{ip}</p></h2>
            <h2 className='headerStyle__info__location box box__border'>LOCATION <p className='headerStyle__info__location__p'>{city}, {region}, {country_name}</p></h2>
            <h2 className='headerStyle__info__time box box__border'>Time ZONE <p className='headerStyle__info__time__p'>{timezone}</p></h2>
            <h2 className='headerStyle__info__isp box box__border'>ISP <p className='headerStyle__info__isp__p'>{isp}</p></h2>
        </section>
    )
}

    const Header = (props) =>{

        console.log('Header: ', props)

        return (
            <header className='headerStyle'>
                <h1 className='headerStyle__h1'><p>IP Address Tracker</p></h1>
                <InputForm/>
                <Info 
                    ip={props}
                />
            </header>
        )
    }

export default Header