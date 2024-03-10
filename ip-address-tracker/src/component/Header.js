import React, { useEffect, useState } from 'react'
import '../styles/headerStyle.css'
import myData from '../API/GeoAPI.js'
import { useButtonAPI } from '../API/GeoAPI.js'
import img from '../images/icon-arrow.svg'


export const InputForm = (props)=> {

    const [ipAddress, setIpAddress] = useState("");

    const [ data , reloadData ] = useButtonAPI();

    // console.log('Show data: ', data)

    // console.log('Data from Effect: ',
    //     data.ip,
    //     data.country_name
    // )

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

    const Header = (props) =>{

        const data = {
        ip:'',
        region:'',
        city:'',
        country_name:'',
        latitude:'',
        longitude:'',
        timezone:'',
        asn:'',
    }

    // console.log('Header: ', data)

    const [ myData , reloadData ] = useButtonAPI();
    // console.log('Header main: ',myData)

        return (
            <header className='headerStyle'>
                <h1 className='headerStyle__h1'><p>IP Address Tracker</p></h1>
                <InputForm/>
                <Info
                    ip = {myData.ip}
                    city = {myData.city}
                    country_name = {myData.country_name}
                    region = {myData.region}
                    timezone = {myData.timezone}
                    isp = {myData.asn}

                />
            </header>
        )
    }

export default Header