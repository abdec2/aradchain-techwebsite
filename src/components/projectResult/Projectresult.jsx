import React from 'react'
import style from './projectresult.module.css'

const Projectresult = ({index, heading, desc}) => {
  return (
    <div className={style.projectResult}>
        <div>
          <p>0{index}</p>
        </div>
        <h3>{heading}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Projectresult