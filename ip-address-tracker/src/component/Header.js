import React, { useState } from 'react'
import '../styles/headerStyle.css'
import myData from '../API/GeoAPI.js'
import img from '../images/right-arrow.svg'

console.log(myData)

export function InputForm() {
    const [ipAddress, setIpAddress] = useState("");
    return (
        <form className='form'>
                    <input
                        className='form__input input'
                        type="text"
                        value={ipAddress}
                        onChange={(e)=> setIpAddress(e.target.value)}
                    />
                    <button type='submit' className='form__btn btn'>
                        {/* <i className='form__btn__i'></i> */}
                        <img className='form__btn__img img' src={img} alt="arrow image" />
                    </button>
                    
        </form>
    )}

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className='headerStyle'>
                <h1 className='headerStyle__h1'><p>IP Address Tracker</p></h1>
{/* ------- Input ------- */}
                <InputForm/>
                <section className='headerStyle__info'>
                    <h2 className='headerStyle__info__ip box'>IP Address: <p className='headerStyle___info__IP__p'>{myData.name}</p></h2>
                    <h2 className='headerStyle__info__location box box__border'>Location: <p className='headerStyle__info__location__p'>{myData.address.city}</p></h2>
                    <h2 className='headerStyle__info__time box box__border'>Time Zone: <p className='headerStyle__info__time__p'>{myData.address.street}</p></h2>
                    <h2 className='headerStyle__info__isp box box__border'>ISP: <p className='headerStyle__info__isp__p'>{myData.email}</p></h2>
                </section>
            </header>
        )
    }
}

export default Header