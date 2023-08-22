import React from 'react'
import style from './servicesgrid.module.css'

const Servicesgrid = ({icon, heading, desc}) => {
  return (
    <div className={style.servicesGrid}>
        {icon}
        <h2>{heading}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Servicesgrid