import React, { useRef, useState } from "react";
import style from "./contact.module.css";
import Heading from "../../components/heading/Heading";
import phone from "../../assets/phoneicon.png";
import email from "../../assets/emailicon.png";
import pin from "../../assets/pin.png";
import Needsolution from "../../components/needSolution/Needsolution";
import Footer1 from "../../components/footer1/Footer1";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// _________________________________________________________________
import { useToast } from "@chakra-ui/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const Contact = () => {
  // __________________________________________________________________

  const formRef = useRef(null);
  const toast = useToast();

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwYkHtWDkY6FtqfD9GD8jzGuzIrhpNArLl_CfuAh7fdAkASZW-o3Rr-L6r0_jRL2fNKbQ/exec";

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        toast({
          title: "Thank you for contacting",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  // ___________________________________________________________________

  return (
    <div className={style.contactMain}>
      <div className={style.mainSection}>
        <div className={style.mainSectionContainer}>
          <Heading heading="Contact" />
          <div className={style.mainSectionContent}>
            <div>
              <h2>Let's get in touch!</h2>
            </div>
            <div className={style.contactDetails}>
              <div className={style.phone}>
                <div>
                  <img src={phone} alt="" />
                </div>
                <p>Phone</p>
                <Link to="https://wa.me/97333227262" target="_blank">
                  <h3>+973 3322 7262</h3>
                </Link>
              </div>
              <div className={style.phone}>
                <div>
                  <img src={email} alt="" />
                </div>

                <p>Email</p>
                <Link to="mailto:info@aradchain.tech" target="_blank">
                  <h3>info@aradchain.tech</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact box section */}
      <div className={style.contactBox}>
        <div className={style.contactBoxContainer}>
          <div className={style.contactBoxLeft}>
            <img src={logo} alt="" />
            <div>
              <img src={pin} alt="" />
              <p>
                South Zone, Dubai International Financial Centre (DIFC) Dubai,
                UAE
              </p>
            </div>
          </div>
          <div className={style.contactBoxRight}>
            <h2>Send Us Message</h2>
            <p>Have any questions regarding our services? Drop us a message.</p>

            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
              <div>
                <div>
                  <label htmlFor="">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Your Name ..."
                    name="Name"
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Your Email Address ..."
                    name="Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="">Message</label>
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Enter Your Message ..."
                ></textarea>
              </div>

              <div>
                <div>
                  <input type="checkbox" name="checkbox" id="" />
                  <p>
                    By ticking this box, I am consenting to be sent monthly
                    articles and promotions through WaveNet newsletter.
                  </p>
                </div>
                <input
                  type="submit"
                  value={loading ? "Loading..." : "SUBMIT"}
                  name="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Need Solution */}
      <Needsolution />
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
      <Footer1 />
    </div>
  );
};

export default Contact;
