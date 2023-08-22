import React from 'react'
import style from './howworks.module.css'
import dot from '../../assets/servicesDot.png'
import line from '../../assets/servicesLine.png'

const Howworks = ({step, image, process, desc}) => {
  return (
    <div className={style.howWorks}>
      <div>
        <img src={dot} alt="" />
        <img src={line} alt="" />
        <img src={dot} alt="" />
      </div>

      <div>
        <img src={image} alt={process} />
      </div>
      

      <h3>{step}</h3>
      <h2>{process}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Howworks