import React from "react";
import Footer2 from "../../components/footer2/Footer2";
import style from "./blogs.module.css";
import Heading from "../../components/heading/Heading";
import Contact from "../../components/contact/Contact";
import data from "../../database/data";
import Blogpost from "../../components/blogPost/Blogpost";
import Readytotake from "../../components/readyToTake/Readytotake";
import Latestpost from "../../components/latestPost/Latestpost";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Blogs = () => {
  return (
    <div className={style.blogMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="Blog" />
        </div>
      </div>

      {/* Blog Section */}
      <div className={style.blogSection}>
        <div className={style.blogSectionContainer}>
          <div className={style.blogBody}>
            {data.blogPosts?.map((ele) => {
              return (
                <Link
                  to={`/article/${ele.slug}`}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Blogpost
                    key={ele.id}
                    image={ele.image}
                    title={ele.title}
                    desc={ele.desc}
                  />
                </Link>
              );
            })}
          </div>
          <div className={style.blogSidebar}>
            {/* Latest Post */}
            <div className={style.latestPostBox}>
              <h3>Latest Post</h3>
              <div>
                {data.blogPosts?.map((ele) => {
                  return (
                    <Link
                      to={`/article/${ele.slug}`}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Latestpost
                        key={ele.id}
                        image={ele.image}
                        date={ele.date}
                        title={ele.title}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Contact Component */}
            <Contact />
          </div>
        </div>
      </div>

      {/* Ready To Take Component */}
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

export default Blogs;
