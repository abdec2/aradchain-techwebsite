import React from 'react'
import style from './whyus.module.css'

const Whyus = ({image, title, desc, alt}) => {
  return (
    <div className={style.whyUsBox}>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Whyus
