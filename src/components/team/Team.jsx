import React from 'react'
import style from './team.module.css'
import {BsLinkedin} from 'react-icons/bs'
import {Link} from 'react-router-dom'
// import images from '../../assets/'

const Team = ({image, desg, name, link}) => {
  return (
    <div className={style.team}>
      <img src={image} alt={desg} />
      <p>{desg}</p>
      <h3>{name}</h3>
      <Link to={link} target="_blank"><BsLinkedin/></Link>
    </div>
  )
}

export default Team
