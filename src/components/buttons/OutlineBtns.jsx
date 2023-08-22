import React from 'react'
import {Link} from 'react-router-dom';
import style from './outlineBtns.module.css'
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'

const OutlineBtns = ({link, text}) => {
  return (
    <>
      <Link className={style.outlineBtnWrapper} to={link} onClick={() => {
                  window.scroll(0, 0);
                }}><button className={style.outlineBtn}>{text}<LiaLongArrowAltRightSolid/></button></Link>
    </>
  )
}

export default OutlineBtns
