import React, { useRef, useState } from 'react'
import logo from '../../assets/logo2.png'
import {Link} from 'react-router-dom'
import style from './footer1.module.css'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import fb from '../../assets/fb.png'
import discord from '../../assets/discord.png'
import linkedin from '../../assets/linkedin.png'

import { useToast } from '@chakra-ui/react'


const Footer1 = () => {



    // __________________________________________________________________

const formRef = useRef(null)
const toast = useToast()
  
  
const scriptUrl = "https://script.google.com/macros/s/AKfycbycoNyON-NOkPKEDwnWG8ReENBeuhT_8kVP1qLEA6bh9jfEKR4svmcfkCA-bGaZqydApA/exec"

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) =>{
      e.preventDefault()
      setLoading(true)

      fetch(scriptUrl, {
      method: 'POST', 
      body: new FormData(formRef.current),

  }).then(res => {
          console.log("SUCCESSFULLY SUBMITTED")
          setLoading(false)
          toast({
            title: 'Succesfully Subscribed',
            description: "Thank you for subscribing to our newsletter. You will now receive the latest updates, news, and exclusive offers directly in your inbox.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
      })
      .catch(err => console.log(err))
  }

// ___________________________________________________________________



  return (
    <div className={style.footer1}>
        <div className={style.footer1Container}>
            <div>
                <img src={logo} alt="footer_logo" />
                <div className={style.socialIcons}>
                    <Link to="https://www.instagram.com/aradchaintech/" onClick={() => {window.scroll(0, 0);}} target="_blank"><img src={insta} alt="instagram-icon" /></Link>
                    <Link to="https://www.facebook.com/groups/1464168664328775/" onClick={() => {window.scroll(0, 0);}} target="_blank"><img src={fb} alt="fb-icon" /></Link>
                    <Link to="https://www.linkedin.com/company/aradchain-technologies-ltd/" onClick={() => {window.scroll(0, 0);}} target="_blank"><img src={linkedin} alt="linkedin-icon" /></Link>
                    <Link to="https://twitter.com/AradChaintech" onClick={() => {window.scroll(0, 0);}} target="_blank"><img src={twitter} alt="twitter-icon" /></Link>
                    <Link to="https://discord.gg/zb5876Fj" onClick={() => {window.scroll(0, 0);}} target="_blank"><img src={discord} alt="discord-icon" /></Link>
                </div>
            </div>
            <div>
                <h3>Explore</h3>
                <ul>
                    <li><Link to="/about" onClick={() => {window.scroll(0, 0);}}>About Us</Link></li>
                    <li><Link to="/services" onClick={() => {window.scroll(0, 0);}}>Services</Link></li>
                    <li><Link to="/projects" onClick={() => {window.scroll(0, 0);}}>Projects</Link></li>
                    <li><Link to="/blogs" onClick={() => {window.scroll(0, 0);}}>Blogs</Link></li>
                    <li><Link to="/contact" onClick={() => {window.scroll(0, 0);}}>Contact Us</Link></li>
                </ul>
            </div>
            <div>
            <h3>Services</h3>
                <ul>
                    <li><Link to="/services/nft-marketplace" onClick={() => {window.scroll(0, 0);}}>NFT Marketplace</Link></li>
                    <li><Link to="/services/blockchain-development" onClick={() => {window.scroll(0, 0);}}>Blockchain Development</Link></li>
                    <li><Link to="/services/blockchain-mlm" onClick={() => {window.scroll(0, 0);}}>Blockchain Based MLM</Link></li>
                    <li><Link to="/services/crypto-funding" onClick={() => {window.scroll(0, 0);}}>Crypto Funding</Link></li>
                    <li><Link to="/services/crypto-websites" onClick={() => {window.scroll(0, 0);}}>Crypto Wesbites</Link></li>
                </ul>
            </div>
            <div>
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to stay informed about our latest products, services, and promotions.
                    Feel free to unsubscribe anytime!</p>
                <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                    <input required type="text" placeholder='Enter Your Email Address ...' name="Email"/>
                    <input type="submit" value={loading ? "Subscribing..." : "SUBSCRIBE"} name="submit"/>
                </form>
            </div>
        </div>
        <div className={style.footerBottom}>
            <p>Copyright © 2023 Aradchain Technologies. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer1