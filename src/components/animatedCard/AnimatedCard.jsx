import React from "react";
import Style from "./animatedCard.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const AnimatedCard = ({ ele }) => {
  return (
    <>
      <Link
        className={Style.Div}
        to={`services/${ele.slug}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <div className={Style.DivHeader}>
          <h2>{ele.title}</h2>
        </div>
        <div className={Style.DivBody}>
          <p>{ele.desc}</p>
        </div>
        <div className={Style.DivFooter}>
          <span>
            {" "}
            <BsArrowRight />
          </span>
        </div>
      </Link>
    </>
  );
};

export default AnimatedCard;
