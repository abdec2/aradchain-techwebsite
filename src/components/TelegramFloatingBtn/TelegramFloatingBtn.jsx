import React from "react";
import Telegram from "../../assets/telegram-blue-1.svg";
import style from "./telegram.module.css";
const TelegramFloatingBtn = () => {
  return (
    <a
      href="https://t.me/aradchain"
      className={style.LinkTelegram}
      target="blank"
    >
      <img src={Telegram} alt="Telegram" />
    </a>
  );
};

export default TelegramFloatingBtn;
