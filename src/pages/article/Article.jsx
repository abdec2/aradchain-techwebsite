import React from "react";
import Contact from "../../components/contact/Contact";
import Readytotake from "../../components/readyToTake/Readytotake";
import Footer2 from "../../components/footer2/Footer2";
import Heading from "../../components/heading/Heading";
import Blogpost from "../../components/blogPost/Blogpost";
import Latestpost from "../../components/latestPost/Latestpost";
import { Link, useParams } from "react-router-dom";
import style from "./article.module.css";
import data from "../../database/data";
import Articletext from "../../components/articleText/Articletext";
import { MdAccountCircle } from "react-icons/md";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Article = () => {
  const { slug } = useParams();

  const filterData = data.blogPosts?.filter((ele) => {
    return ele.slug == slug;
  });
  return (
    <div className={style.articleMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading={filterData[0].title} />
        </div>
      </div>

      {/* Blog Section */}
      <div className={style.articleSection}>
        <div className={style.articleSectionContainer}>
          {/* Article Body */}
          <div className={style.articleBody}>
            <img src={filterData[0].image} alt="" />
            <div>
              <MdAccountCircle />
              <div>
                <h3>Aradchain Technologies</h3>
                <p>{filterData[0].date}</p>
              </div>
            </div>
            <div>
              {filterData[0].content.map((ele) => {
                return (
                  <Articletext
                    heading={ele.heading}
                    para1={ele.para1}
                    para2={ele.para2}
                    para3={ele.para3}
                    para4={ele.para4}
                    para5={ele.para5}
                    subHeading1={ele.subHeading1}
                    subHeading2={ele.subHeading2}
                    subHeading3={ele.subHeading3}
                    subHeading4={ele.subHeading4}
                    subHeading5={ele.subHeading5}
                  />
                );
              })}
            </div>
          </div>

          {/* Side Bar */}
          <div className={style.articleSidebar}>
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

export default Article;
