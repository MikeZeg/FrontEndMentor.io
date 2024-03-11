import React, { useEffect, useState } from 'react'
import '../styles/headerStyle.css'
// import myData from '../API/GeoAPI.js'
import { useButtonAPI } from '../API/GeoAPI.js'
import img from '../images/icon-arrow.svg'



// ---------------------------- InputForm -------------------------
export const InputForm = (props)=> {

    const [ipAddress, setIpAddress] = useState("");

    const [ data , reloadData ] = useButtonAPI();

    useButtonAPI(ipAddress);

    return (
        <form className='form'>
                    <input
                        className='form__input input'
                        type="text"
                        value={ipAddress}
                        placeholder='Search for any IP address or domain'
                        onChange={(e)=> setIpAddress(e.target.value)}
                    />
                    <button className='form__btn btn' onClick={reloadData} type='subit'>
                        <img className='form__btn__img img' src={img} alt="arrow image" />
                    </button>
        </form>
    )}
// --------------------------- INFO ----------------------
export const Info = (props) => {

    return (
        <section className='headerStyle__info'>
            <h2 className='headerStyle__info__ip box'><span className='top__span'>IP ADDRESS </span><p className='headerStyle___info__IP__p'>{props.ip}</p></h2>
            <h2 className='headerStyle__info__location box box__border'>LOCATION <p className='headerStyle__info__location__p'>{props.city}, {props.region}, {props.country_name}</p></h2>
            <h2 className='headerStyle__info__time box box__border'>Time ZONE <p className='headerStyle__info__time__p'>{props.timezone}</p></h2>
            <h2 className='headerStyle__info__isp box box__border'>ISP <p className='headerStyle__info__isp__p'>{props.isp}</p></h2>
        </section>
    )
}
// -------------------------------- HEADER ----------------------
    const Header = (props) =>{

    const [ data , reloadData ] = useButtonAPI();

        return (
            <header className='headerStyle'>
                <h1 className='headerStyle__h1'><p>IP Address Tracker</p></h1>
                <InputForm/>
                <Info
                    ip = {data.ipAddress}
                    city = {data.cityName}
                    country_name = {data.countryName}
                    region = {data.regionName}
                    timezone = {data.timeZone}
                    // isp = {data.asn}
                />
            </header>
        )
    }

export default Header;