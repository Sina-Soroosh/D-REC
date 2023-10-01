import React, { useEffect, useState } from "react";
import "./HouseBox.css";
import { Link, json } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HouseBox(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [myFavorites, setMyFavorites] = useState(
    JSON.parse(localStorage.getItem("myFavorites")) || []
  );

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let isFavorite = myFavorites.some((houseID) => +houseID === +props.id);

    if (isFavorite) {
      setIsFavorite(true);
    }
  }, []);

  const changeFavorite = (e) => {
    setIsFavorite(e.target.checked);
    let myFavorites = JSON.parse(localStorage.getItem("myFavorites")) || [];

    if (e.target.checked) {
      localStorage.setItem(
        "myFavorites",
        JSON.stringify([...myFavorites, props.id])
      );
    } else {
      localStorage.setItem(
        "myFavorites",
        JSON.stringify(myFavorites.filter((houseID) => +houseID !== +props.id))
      );

      if (props.addFavorite) {
        props.addFavorite();
      }
    }
  };

  return (
    <div
      className={props.isRelated ? "col-12" : "col-md-6 col-lg-4 col-12 mb-4"}
      data-aos="fade-up"
    >
      <div className="house-box">
        <div className="top-house-box">
          <div className="image-house-box">
            <div className="con-like">
              {isFavorite ? (
                <input
                  className="like"
                  type="checkbox"
                  title="like"
                  onClick={changeFavorite}
                  defaultChecked
                />
              ) : (
                <input
                  className="like"
                  type="checkbox"
                  title="like"
                  onClick={changeFavorite}
                />
              )}
              <div className="checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="outline"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="filled"
                  viewBox="0 0 24 24"
                  style={{ display: isFavorite ? "block" : "none" }}
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100"
                  width="100"
                  className="celebrate"
                  style={{ display: isFavorite ? "block" : "none" }}
                >
                  <polygon className="poly" points="10,10 20,20"></polygon>
                  <polygon className="poly" points="10,50 20,50"></polygon>
                  <polygon className="poly" points="20,80 30,70"></polygon>
                  <polygon className="poly" points="90,10 80,20"></polygon>
                  <polygon className="poly" points="90,50 80,50"></polygon>
                  <polygon className="poly" points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
            <img src={props.cover} alt={props.name} />
          </div>
        </div>
        <div className="down-house-box">
          <div className="title-house-box">
            <h5>{props.name}</h5>
          </div>
          <div className="info-house-box">
            <div className="row py-3 text-center">
              <div className="col-3">
                <span>Parking</span>
                <div className="count">
                  <i className="icon fa-solid fa-warehouse"></i> {props.parking}
                </div>
              </div>
              <div className="col-3">
                <span>Bathroom</span>
                <div className="count">
                  <i className="fa-solid fa-bath icon"></i> {props.bathroom}
                </div>
              </div>
              <div className="col-3">
                <span>Bedroom</span>
                <div className="count">
                  <i className="icon fa-solid fa-bed"></i> {props.bedroom}
                </div>
              </div>
              <div className="col-3">
                <span>Meterage</span>
                <div className="count">
                  <i className="fa-solid fa-house-chimney icon"></i>{" "}
                  {props.meterage} sqft
                </div>
              </div>
            </div>
          </div>
          <div className="footer-house-box text-center py-3">
            <div className="row">
              <div className="col-6 d-flex align-items-center justify-content-center">
                <Link to={`/single-property/${props.name}`} className="btn">
                  Property details
                </Link>
              </div>
              <div className="col-6">
                <p>For {props.isSale ? "Sale" : "Rent"}</p>
                <p>$ {props.price && props.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseBox;
