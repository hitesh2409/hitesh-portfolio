import React from "react";
import AboutStyle from "./About.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={AboutStyle.about}>
        <div className={AboutStyle.about_img}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQG_i8gUrIdQzA/profile-displayphoto-shrink_400_400/0/1700715739355?e=1707955200&v=beta&t=BxWKabBV1W3fN8EWxcKjibm9MN7EW0ej-HS5iyVKsbQ"
            alt=""
          />
        </div>
        <div className={AboutStyle.about_content}>
          <h2>
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>
          <p>
            Passionate front-end developer with a keen eye for design and a
            commitment to crafting engaging and responsive user experiences.
            Proficient in HTML, CSS, and JavaScript, dedicated to staying
            current with industry trends and implementing cutting-edge
            technologies to deliver visually stunning and intuitive websites.
          </p>
          <div className={AboutStyle.readmore_btn}>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
