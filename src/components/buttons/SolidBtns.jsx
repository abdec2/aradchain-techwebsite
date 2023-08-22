import React from 'react'
import {Link} from 'react-router-dom';
import style from './solidBtns.module.css'
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'


const SolidBtns = ({link, text, onClick}) => {
  return (
    <div>
      <Link to={link}><button className={style.solidBtn} onClick={onClick}>{text}<LiaLongArrowAltRightSolid/></button></Link>
    </div>
  )
}

export default SolidBtns
