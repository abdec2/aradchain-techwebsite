import React from 'react'
import style from './latestpost.module.css'

const Latestpost = ({image, date, title}) => {
  return (
    <div className={style.latestPost}>
        <img src={image} alt="" />
        <div>
            <p>{date}</p>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Latestpost