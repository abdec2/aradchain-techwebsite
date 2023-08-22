import React from 'react'
import data from '../../database/data';
import style from './readytotake.module.css'
import Homestats from '../../components/homeStats/Homestats';
import OutlineBtns from '../buttons/OutlineBtns';


const Readytotake = () => {
  return (
    <div className={style.readyToTakeSection}>
        <div className={style.readyToTakeContainer}>
          <div className={style.readyToTakeLeft}>
            <h1>Ready to take your <span>Blockchain Idea</span> to the next level?</h1>
            <OutlineBtns text="Contact Us" link="/contact"/>
          </div>
          <div className={style.readyToTakeRight}>
          {
                data.aboutStatsData.map((ele)=>{
                  return(
                    <Homestats 
                    key={ele.id}
                    number={ele.number}
                    text={ele.text}
                    />
                  )
                })
              }
          </div>
        </div>
      </div>
  )
}

export default Readytotake