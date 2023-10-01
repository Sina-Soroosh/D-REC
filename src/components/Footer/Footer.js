import React, { useEffect, useState } from "react";
import "./Footer.css";
import BlogFooterBox from "../BlogFooterBox/BlogFooterBox";
import { Link } from "react-router-dom";
import data from "../../data";

function Footer() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([data.blogs[0], data.blogs[1]]);
  }, []);

  return (
    <footer className="footer">
      <div className="instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                Please do not forget to follow our{" "}
                <a
                  href="https://www.instagram.com/sina.sorooshfar"
                  target="_blank"
                >
                  Instagram
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="pics">
        <div className="container-fluid">
          <div className="row">
            <img src="/images/footer/1.jpg" alt="footer_image" />
            <img src="/images/footer/2.jpg" alt="footer_image" />
            <img src="/images/footer/3.jpg" alt="footer_image" />
            <img src="/images/footer/4.jpg" alt="footer_image" />
            <img src="/images/footer/5.jpg" alt="footer_image" />
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="/images/DREX-LUX.png" alt="logo" className="logo" />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="about-footer">
                    <h5>about us</h5>
                    <p>
                      With the support of years of experience and activity in
                      the field of construction of villa settlements and with
                      the credit that it has managed to acquire over the years.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="footer-blog">
                    <h5>The latest blog content</h5>
                    {blogs.map((blog) => (
                      <BlogFooterBox {...blog} key={blog.id} />
                    ))}
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="footer-address">
                    <h5>Contact us</h5>
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
                <div className="copyright">
                  <p>
                    Copyright ©2023 All Rights Reserved by{" "}
                    <Link to="/">D-REC</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
