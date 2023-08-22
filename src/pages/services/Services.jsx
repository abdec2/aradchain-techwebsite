import React from "react";
import Footer1 from "../../components/footer1/Footer1";
import Heading from "../../components/heading/Heading";
import style from "./services.module.css";
import data from "../../database/data";
import Servicesbox from "../../components/servicesBox/Servicesbox";
import Needsolution from "../../components/needSolution/Needsolution";
import Howworks from "../../components/howWorks/Howworks";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
// import data from '../../database/data';

const Services = () => {
  return (
    <div className={style.servicesMain}>
      {/* Main Section */}
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="Services" />
        </div>
      </div>

      {/* Services Section */}
      <div className={style.servicesSection}>
        <div className={style.servicesSectionContainer}>
          {data.services.map((ele) => {
            return (
              <Link
                to={`/services/${ele.slug}`}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <Servicesbox
                  key={ele.id}
                  icon={ele.icon}
                  title={ele.title}
                  desc={ele.desc}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className={style.howItWorksSection}>
        <div className={style.howItWorksContainer}>
          <h2>How It Works</h2>
          {data.howWorks.map((ele) => {
            return (
              <Howworks
                key={ele.id}
                step={ele.step}
                image={ele.image}
                process={ele.process}
                desc={ele.desc}
              />
            );
          })}
        </div>
      </div>

      {/* Need Solution Section */}
      <div className={style.needSolution}>
        <Needsolution />
      </div>
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
      <Footer1 />
    </div>
  );
};

export default Services;
