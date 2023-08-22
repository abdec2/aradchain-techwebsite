import React from 'react'
import style from './contact.module.css'
import logo2 from '../../assets/logo2.png'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {MdMail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div className={style.serviceContact}>
                    <div>
                        <h2>Contact</h2>
                        <div>
                            <Link to="tel:+97333227262" target="_blank"><p><BsFillTelephoneForwardFill/>+973 33227262</p></Link>
                        </div>
                        <div>
                            <Link to="https://wa.me/97333227262" target="_blank"><p><AiOutlineWhatsApp/>+973 33227262</p></Link>
                        </div>
                        <div>
                            <Link to="mailto:info@aradchain.tech" target="_blank"><p><MdMail/>info@aradchain.tech</p></Link>
                        </div>
                        <div>
                            <p><HiLocationMarker/>South Zone, Dubai International Financial Centre (DIFC) Dubai, UAE</p>
                        </div>
                    </div>
                    <img src={logo2} alt="" />
                    
                </div>
  )
}

export default Contact