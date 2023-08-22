import React from "react";
import style from "./projectpage2.module.css";
import { useParams } from "react-router-dom";
import data from "../../database/data";
import Readytotake from "../../components/readyToTake/Readytotake";
import Footer2 from "../../components/footer2/Footer2";
import Projectresult from "../../components/projectResult/Projectresult";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Projectpage2 = () => {
  let count = 1;

  const { slug } = useParams();

  const filterData = data.projects?.filter((ele) => {
    return ele.slug == slug;
  });

  console.log(filterData[0]);

  return (
    <div className={style.servicePageMain}>
      {/* Heading */}
      <div className={style.projectHeading}>
        <h1>{filterData[0].client}</h1>
      </div>

      {/* Container */}
      <div className={style.projectPageContainer}>
        <div className={style.projectPageContent}>
          <img src={filterData[0].image} alt="" />

          {/* Project Details */}
          <div className={style.projectDetails}>
            <div>
              <p>YEAR</p>
              <h3>{filterData[0].year}</h3>
            </div>
            <div>
              <p>CLIENT</p>
              <h3>{filterData[0].client}</h3>
            </div>
            <div>
              <p>INDUSTRY</p>
              <h3>{filterData[0].client}</h3>
            </div>
            <div>
              <p>SERVICES</p>
              <h3>{filterData[0].service}</h3>
            </div>
          </div>

          {/* Project Challenge */}
          <div className={style.projectChallenge}>
            <h2>Challenge</h2>
            <p>{filterData[0].challenge[0]}</p>
            <p>{filterData[0].challenge[1]}</p>
          </div>

          {/* Project Details Mid */}
          <div className={style.projectDetailsMid}>
            {/* Project Solutions */}
            <div className={style.projectSolution}>
              <h2>Sollution</h2>
              <p>{filterData[0].solution[0]}</p>
            </div>

            {/* Project Startegy */}
            <div className={style.projectStrategy}>
              <h2>Strategy</h2>
              <ul>
                <li>{filterData[0].strategy[0]}</li>
                <li>{filterData[0].strategy[1]}</li>
                <li>{filterData[0].strategy[2]}</li>
              </ul>
            </div>
          </div>

          {/* Project Result */}
          <div className={style.projectResult}>
            <h2>Results</h2>
            <div className={style.projectResultsBoxes}>
              {filterData[0]?.results.map((ele) => {
                return (
                  <Projectresult
                    index={count++}
                    heading={ele.heading}
                    desc={ele.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Ready To Take */}
      <Readytotake />
      <TelegramFloatingBtn />
      <FloatingWhatsApp
        phoneNumber="447778222221"
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
      />

      {/* Foooter Section */}
      <Footer2 />
    </div>
  );
};

export default Projectpage2;
