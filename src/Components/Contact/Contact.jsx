import React, { useEffect } from "react";
import ContactStyle from "./Contact.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ContactBox = styled.div`
  padding-top: calc(1rem + 60px);
  min-height: 100vh;
  background: #1f242d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  h2 {
    font-size: 3.2rem;
    font-weight: 700;

    span {
      color: #0ef;
    }
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }

  form {
    max-width: 60rem;
    /* margin: 1rem auto; */
    text-align: center;
    margin-bottom: 3rem;

    input,
    textarea {
      /* width: 95%; */
      background: #323946;
      padding: 8px;
      font-size: 1.3rem;
      color: #fff;
      outline: none;
      border: none;
      margin: 10px;
      border-radius: 10px;
    }
    textarea {
      resize: none;
      width: 96.5%;
    }
    .send_message {
      padding: 10px;

      button {
        display: inline-flex;
        padding: 10px 15px;
        background: #0ef;
        border-radius: 25px;
        box-shadow: 0 0 6px #0ef;
        border: none;
        font-weight: 600;
        color: #323946;
        letter-spacing: 1px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: 0.5s ease;
        &:hover {
          box-shadow: none;
        }
      }
    }
  }

  .input-box {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 10px;
    @media only screen and (max-width: 600px) {
      grid-template-columns: auto;
    }

    input.error::placeholder {
      color: red;
    }
  }
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [emailSub, setEmailSub] = useState("");
  const [desc, setDesc] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  // const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  function validateField() {
    let errors = [];
    if (name === "") {
      // setNameError("Name is required");
      errors.push("Name is required");
      // return false;
    }
    if (email === "") {
      // setEmailError("Email is required");
      errors.push("Email is required");
      // return false;
    }
    if (contact === "") {
      // setContactError("Contact is required");
      errors.push("Contact is required");
      // return false;
    }

    setNameError(name === "" ? "Name is required" : "");
    setEmailError(email === "" ? "Email is required" : "");
    setContactError(contact === "" ? "Contact is required" : "");

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateField();

    if (errors.length === 0) {
      axios
        .post(
          "https://6596930e6bb4ec36ca02eec5.mockapi.io/Portfolio-FormData",
          {
            name: name,
            email: email,
            contact: contact,
            emailSub: emailSub,
            desc: desc,
          }
        )
        .then(() => {
          setShowAlert(true);
          setName("");
          setContact("");
          setEmail("");
          setEmailSub("");
          setDesc("");
          setNameError("");
          setEmailError("");
          setContactError("");
        });
    }
  };

  return (
    <>
      <Navbar />

      <ContactBox>
        {showAlert && <AlertMsg setShowAlert={setShowAlert} />}
        <h2>
          Contact <span>Me!</span>
        </h2>
        <form action="#">
          <div className="input-box">
            <input
              type="text"
              placeholder={nameError ? nameError : "Your Name"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateField();
              }}
              className={nameError ? "error" : ""}
            />
            {/* {nameError && <div style={{ color: "red" }}>{nameError}</div>} */}
            <input
              type="email"
              placeholder={emailError ? emailError : "Your Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField();
              }}
              className={emailError ? "error" : ""}
            />
            {/* {emailError && <div style={{ color: "red" }}>{emailError}</div>} */}
            <input
              type="text"
              placeholder={contactError ? contactError : "Your Contact"}
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                validateField();
              }}
              className={contactError ? "error" : ""}
            />
            {/* {contactError && <div style={{ color: "red" }}>{contactError}</div>} */}
            <input
              type="email"
              placeholder="Email Subject"
              value={emailSub}
              onChange={(e) => {
                setEmailSub(e.target.value);
              }}
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            maxLength={"100"}
            placeholder="Your Message"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <div className="send_message">
            <button onClick={handleSubmit}>Send Message</button>
          </div>
        </form>
      </ContactBox>
      <Footer />
    </>
  );
}

const AlertMsg = ({ setShowAlert }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setShowAlert(false);
  };

  useEffect(() => {
    // Set a timeout to hide the alert after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [setShowAlert]);

  return (
    <div
      className={`${ContactStyle.AlertMsg} ${
        isVisible ? "" : ContactStyle.hidden
      }`}
    >
      <span className={ContactStyle.closeBtn} onClick={handleClose}>
        &times;
      </span>
      <h3>Message Sent</h3>
      <span> Thanks For Contacting! 👍</span>
    </div>
  );
};
