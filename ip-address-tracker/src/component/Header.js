import React, { useEffect, useState } from 'react'
import '../styles/headerStyle.css'
import img from '../images/icon-arrow.svg'
import { useButtonAPI } from '../API/GeoAPI';

// ---------------------------- InputForm -------------------------
export const InputForm = (props)=> {
    
    const [ipAddress, setIpAddress] = useState("");
    const [ip, setIP] = useState('')

    const handleChange = (e)=>{
        setIpAddress(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(ipAddress)
        console.log('INPUT: Send IP to header', ipAddress)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
                    <input
                        className='form__input input'
                        type="text"
                        value={ipAddress}
                        placeholder='Search for any IP address or domain'
                        onChange={(e)=> {
                            setIpAddress(e.target.value)
                            handleChange(e)
                        }}
                    />
                    <button 
                        className='form__btn btn' 
                        // onClick={(e)=>{
                        //     e.preventDefault()
                        //     setIP(ipAddress)
                        // }}
                        type='submit'
                    >
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
        const [ip, setIp] = useState('')
        
        console.log('Check IP in header: ', ip)
        
        const inputData = (data) => {
            console.log('--- Header ---> Received IP from Info Input', data)
            setIp(data)
        }

// Send IP to App.js - each time when IP from InputForm Change
        useEffect(()=>{
            props.changeIp(ip)
        },[ip])

        return (
            <header className='headerStyle'>
                <h1 className='headerStyle__h1'><p>IP Address Tracker</p></h1>
                <InputForm
                    onSubmit={inputData}
                />
                <Info
                    ip = {props.ip}
                    city = {props.city}
                    country_name = {props.country_name}
                    region = {props.region}
                    timezone = {props.timezone}
                    isp = {props.asn}
                />
            </header>
        )}

export default Header;