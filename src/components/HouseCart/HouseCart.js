import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HouseCart.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HouseCart(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="house-cart" data-aos="fade-up">
      <div className="container-house-cart">
        <div className="title-house-cart">
          <h5>{props.name}</h5>
        </div>
        <div className="details-house-cart">
          <p>{props.desc}</p>
        </div>
        <div className="info-house-cart">
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
        <div className="footer-house-cart text-center py-3">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <Link to={`/single-property/${props.name}`} className="btn">
                Property details
              </Link>
            </div>
            <div className="col-6">
              <p>For {props.isSale ? "Sale" : "Rent"}</p>
              <p>$ {props.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseCart;
