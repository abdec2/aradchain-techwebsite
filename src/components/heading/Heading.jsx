import React from 'react'
import style from './heading.module.css'

const Heading = ({heading}) => {
  return (
    <div>
      <h1 className={style.headingH1}>{heading}</h1>
    </div>
  )
}

export default Heading
