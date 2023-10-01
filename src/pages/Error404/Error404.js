import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import { Link } from "react-router-dom";
import "./Error404.css";

function Error404() {
  return (
    <>
      <HeroSection text="Not found Page !" title="404" />

      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>

      <div className="error-404">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 content-404">
              <img src="/images/404.png" alt="" />

              <div>
                <h5>something went wrong!</h5>
                <p>This page you are looking for isn't on the D-REC</p>
                <Link className="btn btn-outline-dark" to="/">
                  Back to home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
