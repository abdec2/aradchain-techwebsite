import React, { useEffect, useState } from 'react'
import style from './projectsbox.module.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file for styling

const Projectsbox = ({year, icon, slug, service, client, shortDesc}) => {
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

        // isHovered ?  <div className={style.projectsBoxHovered}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}>
        //         <p>{service}</p>
        //         <img src="" alt="" />
        //         <h2>{client}</h2>
        //         <p></p>
        //         <Link to=""><button>READ MORE</button></Link>
        // </div> 

        <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-aos="flip-right"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
    >
            {
              isHovered ? 
            <div className={style.projectsBoxHovered}>
                 <p>{service}</p>
                 <img src={icon} alt="icon" />
                 <h2>{client}</h2>
                 <p>{shortDesc}</p>
                <Link to={`/projects/${slug}`}><button>READ MORE</button></Link>
            </div>
                
                :
            <div className={style.projectsBox}>
                <p>{year}</p>
                <p>{service}</p>
                <h2>{client}</h2>
            </div>

}
            
        </div>




    
  )
}

export default Projectsbox