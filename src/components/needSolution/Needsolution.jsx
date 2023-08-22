import React from 'react'
import style from './needsolution.module.css'
import { Link } from 'react-router-dom'

const Needsolution = () => {
  return (
    <div className={style.needSolutionSection}>
      <div className={style.needSolutionContainer}>
        <h1>Need Blockchain Solutions?</h1>
        <h1>Let’s <span>start now.</span></h1>
        <Link to="/contact" onClick={() => {window.scroll(0, 0);}}><button>Contact Us</button><img src={require("../../assets/aboutBtnIcon.png")} alt="" /></Link>
      </div>
    </div>
  )
}

export default Needsolution