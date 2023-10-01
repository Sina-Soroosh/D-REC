import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <>
      <header className="header">
        {isShowMenu ? (
          <div id="cover-page" onClick={() => setIsShowMenu(false)}></div>
        ) : null}
        <div className="content-header">
          <div className="left-header">
            <div className="logo-header">
              <img alt="D-REC" src="/images/logo.png" />
            </div>
          </div>
          <div className={`right-header ${isShowMenu ? "show-menu" : ""}`}>
            <div className="logo-close" onClick={() => setIsShowMenu(false)}>
              <i className="icon-close fa-solid fa-xmark"></i>
            </div>
            <ul className="menu">
              <li className="item-menu">
                <Link to="/">Home</Link>
              </li>
              <li className="item-menu">
                <Link to="/about-us">About us</Link>
              </li>
              <li className="item-menu">
                <Link to="/houses">Property list</Link>
              </li>
              <li className="item-menu">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="item-menu">
                <Link to="/my-favorites">My favorites</Link>
              </li>
              <li className="item-menu">
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="logo-menu" onClick={() => setIsShowMenu(true)}>
            <i className="icon-menu fas fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
