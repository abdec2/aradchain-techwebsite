import React from 'react'
import style from './blogpost.module.css'

const Blogpost = ({image, title, desc}) => {
  return (
    <div className={style.blogPost}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Blogpost