import React from "react";
import style from "./servicespage.module.css";
import data from "../../database/data";
import { Link, useParams } from "react-router-dom";
import Servicesgrid from "../../components/servicesGrid/Servicesgrid";
import Footer2 from "../../components/footer2/Footer2.jsx";
import Readytotake from "../../components/readyToTake/Readytotake";
import Contact from "../../components/contact/Contact";
import { IoIosArrowForward } from "react-icons/io";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Servicespage = () => {
  const { slug } = useParams();

  const filterData = data.services?.filter((ele) => {
    return ele.slug == slug;
  });

  return (
    <div className={style.servicePageMain}>
      <div className={style.serviceHeading}>
        <h1>{filterData[0].title}</h1>
      </div>
      <div className={style.serviceContainer}>
        <div className={style.serviceContent}>
          <img src={filterData[0].image} alt="" />
          {filterData[0].content.para?.map((ele) => {
            return <p>{ele}</p>;
          })}

          <div>
            {filterData[0].content.points?.map((ele) => {
              return (
                <Servicesgrid
                  key={ele.id}
                  icon={ele.icon}
                  heading={ele.heading}
                  desc={ele.para}
                />
              );
            })}
          </div>
        </div>
        <div className={style.serviceSidebar}>
          <div className={style.serviceList}>
            <h2>Services</h2>
            <ul>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/blockchain-development"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Blockchain Development
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/minting-engine"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Minting Engine
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/nft-marketplace"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  NFT Marketplace
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/nft-artwork"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  NFT Artwork
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/nft-staking"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  NFT Staking
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/ico-launchpad"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  ICO Launchpad
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-staking"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Staking
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-gaming"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Gaming
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/blockchain-mlm"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Blockchain Based MLM​
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-funding"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Funding
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-swapping"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Swapping
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-bridging"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Bridging
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-exchange"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Exchange
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-websites"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Websites
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-dashboard"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Dashboard
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/crypto-claiming-token"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Crypto Claiming Token
                </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link
                  to="/services/erc20-token-creation"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  ERC20 Token Creation
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Component */}
          <Contact />
        </div>
      </div>

      {/* Ready to take */}
      <div className={style.readyToTake}>
        <Readytotake />
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

      {/* Footer Section */}
      <Footer2 />
    </div>
  );
};

export default Servicespage;
