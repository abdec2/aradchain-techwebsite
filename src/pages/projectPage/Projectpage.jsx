import React, { useEffect } from "react";
import style from "./projectpage.module.css";
import { Link, useParams } from "react-router-dom";
import data from "../../database/data";
import Readytotake from "../../components/readyToTake/Readytotake";
import Footer2 from "../../components/footer2/Footer2";
import Projectresult from "../../components/projectResult/Projectresult";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Projectpage = () => {
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
              <p>SERVICES</p>
              <h3>{filterData[0].service}</h3>
            </div>
            <div>
              <p>VIEW PROJECT</p>
              <div>
                <Link to={filterData[0].link} target="_blank">
                  <h3>Click Here</h3>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className={style.projectContent}>
            <p>{filterData[0].para1}</p>
            <p>{filterData[0].para2}</p>
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

export default Projectpage;
