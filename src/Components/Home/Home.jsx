import React from "react";
import HomeStyle from "./Home.module.scss";
import Navbar from "../Navbar/Navbar";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const downloadCv = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Hitesh CV.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className={HomeStyle.Home}>
        <div className={HomeStyle.My_Desc}>
          <div className={HomeStyle.Name_and_Role}>
            <h3>Hello, It's Me </h3>
            <h1>Hitesh Kumar</h1>
            <h3>
              <span>Front End Developer</span>
            </h3>
            <p>
              Passionate frontend developer creating seamless user experiences
              with innovative design and code, shaping digital landscapes with
              creativity and precision.
            </p>
          </div>

          <div className={HomeStyle.Social_Medias}>
            <a
              href="https://www.linkedin.com/in/hitesh-chaudhary-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ background: "transparent" }} />
            </a>
            <a
              href="https://www.instagram.com/hitesh.chaudhary__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ background: "transparent" }} />
            </a>
            <a
              href="https://wa.me/+919518271138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ background: "transparent" }} />
            </a>
          </div>
          <div className={HomeStyle.CV_Button}>
            <button onClick={downloadCv}>Download CV</button>
            <Link to="/contact">
              <button>Hire Me</button>
            </Link>
          </div>
        </div>
        <div className={HomeStyle.My_Img}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQG_i8gUrIdQzA/profile-displayphoto-shrink_400_400/0/1700715739355?e=1707955200&v=beta&t=BxWKabBV1W3fN8EWxcKjibm9MN7EW0ej-HS5iyVKsbQ"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
