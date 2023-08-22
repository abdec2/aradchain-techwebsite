import React from 'react'
import style from './homeproject.module.css'
import { Link } from 'react-router-dom'

const Homeproject = ({index, client, year, image, shortDesc, slug }) => {
  return (
    <Link to={`/projects/${slug}`}  onClick={() => {window.scroll(0, 0);}}>
    <div className={style.homeProject}>
        <div>
            <p>0{index}</p>
            <h2>{client}</h2>
        </div>
        <div>
            <p>{year}</p>
            <p>{shortDesc}</p>
        </div>
        <div>
            <img src={image} alt={client} />
        </div>
    </div>
    </Link>
  )
}

export default Homeproject