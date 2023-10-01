import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./ContactUs.css";
import regexPatterns from "../../regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const titleRef = useRef(null);
  const messageRef = useRef(null);
  const swal = withReactContent(Swal);
  const navigate = useNavigate();

  const contact = (e) => {
    e.preventDefault();

    let emailIsValid = regexPatterns.email.test(emailRef.current.value);

    if (
      emailIsValid &&
      emailRef.current.value.trim().length &&
      titleRef.current.value.trim().length &&
      messageRef.current.value.trim().length
    ) {
      swal
        .fire({
          title: "Your message has been sent successfully",
          icon: "success",
          confirmButtonColor: "#176B87",
        })
        .then(() => {
          navigate("/");
        });
    } else {
      swal.fire({
        title: "Please enter the values ​​correctly",
        icon: "error",
        confirmButtonColor: "#176B87",
      });
    }
  };

  return (
    <>
      <HeroSection text="Contact us" />

      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>Be in touch with us</h4>
              <form className="row" onSubmit={contact}>
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" ref={nameRef} />
                </div>
                <div className="col-lg-6">
                  <input type="email" placeholder="Email" ref={emailRef} />
                </div>
                <div>
                  <input type="text" placeholder="Title" ref={titleRef} />
                </div>
                <div>
                  <textarea placeholder="Message" ref={messageRef}></textarea>
                </div>
                <div>
                  <button>Send</button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <h4>Contact details</h4>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  Miami - Miami - fake street
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  sinasoroosh07@gmail.com
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  +1 123-456-7890
                </li>
              </ul>

              <p>Monday to Friday 9 AM to 9 PM</p>
              <p>Saturday 9 AM to 1 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
