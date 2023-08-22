import React, { useState } from "react";
import style from "./navbar2.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import CustomHeader from "../customHeader/CustomHeader";
const Navbar2 = () => {
  const [flag, setFlag] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeFunc = () => {
    setFlag(!flag);
  };

  const handleHam = () => {
    setFlag(!flag);
    console.log("Hello");
  };

  console.log(flag);

  return (
    <>
      <CustomHeader />
      <div className={style.navbar2}>
        <div
          className={flag ? `${style.hamContainer}` : `${style.nav2Container}`}
        >
          <div className={style.nav2Left}>
            <Link to="/">
              <img src={logo} alt="logo2" />
            </Link>
          </div>
          <div className={style.nav2Mid}>
            <ul>
              <li>
                <Link to="/">Blockchain</Link>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/blogs">BLOGS</Link>
              </li>
            </ul>
          </div>
          <div className={style.nav2Right}>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
            <RxHamburgerMenu onClick={handleHam} />
          </div>
        </div>
      </div>

      <div className={flag ? `${style.hamMenuClose}` : `${style.hamMenu}`}>
        <ul>
          <li onClick={closeFunc}>X</li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/blogs">BLOGS</Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
