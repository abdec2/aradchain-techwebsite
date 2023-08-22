import React from 'react'
import style from './articletext.module.css'

const Articletext = ({heading, para1, para2, para3, para4, para5, subHeading1, subHeading2, subHeading3, subHeading4, subHeading5}) => {
  return (
    <div className={style.articleText}>
        <h2>{heading}</h2>
        <p><span>{subHeading1}</span> {para1}</p>
        <p><span>{subHeading2}</span> {para2}</p>
        <p><span>{subHeading3}</span> {para3}</p>
        <p><span>{subHeading4}</span> {para4}</p>
        <p><span>{subHeading5}</span> {para5}</p>
    </div>
  )
}

export default Articletext