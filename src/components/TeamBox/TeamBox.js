import React, { useEffect } from "react";
import "./TeamBox.css";
import AOS from "aos";
import "aos/dist/aos.css";

function TeamBox(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="col-md-6 col-lg-4 my-3" data-aos="fade-up">
      <div className="container-staff">
        <div className="profile-staff">
          <img src={props.profile} alt={props.name} />
        </div>
        <div className="details-staff">
          <h3>{props.name}</h3>
          <p>{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamBox;
