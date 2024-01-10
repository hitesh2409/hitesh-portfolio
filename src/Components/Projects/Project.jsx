import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectPageStyle from "./Project.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../Footer/Footer";

export default function Project() {
  return (
    <>
      <Navbar />
      <div className={ProjectPageStyle.Projects}>
        <h2>
          Latest <span>Projects</span>
        </h2>
        <div className={ProjectPageStyle.Projects_container}>
          <div className={ProjectPageStyle.Project_Box}>
            <img
              src="https://st2.depositphotos.com/3761483/42053/i/450/depositphotos_420538452-stock-photo-krakow-poland-october-2020-spotify.jpg"
              alt=""
            />
            <div className={ProjectPageStyle.Project_layer}>
              <h4>Spotify Clone</h4>
              <p>
                Spotify is a music app. I have cloned this app using my skills
                of HTML, CSS, Javascript.
              </p>
              <p>
                <a
                  href="https://transcendent-sprite-e7b5cf.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
          <div className={ProjectPageStyle.Project_Box}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_7jNrEZLNKPF8Fe5LO2hafSQC95mDlfrcw&usqp=CAU"
              alt=""
            />
            <div className={ProjectPageStyle.Project_layer}>
              <h4>Crud Opertion</h4>
              <p>
                Implemented a React CRUD app with form submission, mock API data
                insertion, and AG-Grid data display.
              </p>
              <p>
                <a
                  href="https://hitesh-364656.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
          <div className={ProjectPageStyle.Project_Box}>
            <img
              src="https://content.jdmagicbox.com/comp/bhubaneshwar/f9/0674px674.x674.200720192503.i5f9/catalogue/wedesign-bhubaneshwar-internet-website-designers-tmqjz2vvhc.jpg"
              alt=""
            />
            <div className={ProjectPageStyle.Project_layer}>
              <h4>Web Design</h4>
              <p>
                Built responsive website clones with HTML, CSS, and Sass,
                demonstrating front-end proficiency.
              </p>
              <p>
                <a
                  href="https://shloklab-landpage-design.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
          <div className={ProjectPageStyle.Project_Box}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8YLHk2NSAZRIWmtmCJ2_wo1Dr7X63r8RBQ&usqp=CAU"
              alt=""
            />
            <div className={ProjectPageStyle.Project_layer}>
              <h4>Contact Card</h4>
              <p>Crafted a personalized contact card using JSX and SCSS.</p>
              <p>
                <a
                  href="https://venerable-banoffee-371bf9.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
          <div className={ProjectPageStyle.Project_Box}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdMd5OwDW1ttgW7tfBL4raFWux_Nh8XxJww&usqp=CAU"
              alt=""
            />
            <div className={ProjectPageStyle.Project_layer}>
              <h4>Digital Restaurent</h4>
              <p>
                Designed interactive restaurant site, enhancing user experience
                with menu explore buttons for easy item addition.
              </p>
              <p>
                <a
                  href="https://restaurant-digital-menu.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
          <div className={ProjectPageStyle.Project_Box}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div className={ProjectPageStyle.Project_layer}>
              <h4>TextUtils</h4>
              <p>
                Designed and implemented versatile text manipulation tools for
                enhanced user productivity.
              </p>
              <p>
                <a
                  href="https://brilliant-valkyrie-796678.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
