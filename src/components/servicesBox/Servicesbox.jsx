import React, { useEffect, useState } from 'react'
import style from './servicesbox.module.css'
import arrow from '../../assets/servicesArrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file for styling

const Servicesbox = ({icon, title, desc}) => {
  const [isHovered, setIsHovered] = useState(false);
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  useEffect(() => {
    AOS.init();
  }, []);

  return ( 
    <div id={isHovered ? `${style.servicesBoxHovered}` : ""} className={style.servicesBox}

    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    data-aos="flip-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    >
        <div>
            <img src={icon} alt={title} />
            <img src={arrow} alt="" />
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Servicesbox