import React from 'react'
import style from './aboutStats.module.css'

const AboutStats = ({number, text}) => {
  return (
    <div className={style.aboutStats}>
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  )
}

export default AboutStats
