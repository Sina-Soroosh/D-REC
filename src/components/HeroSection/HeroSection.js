import React, { useEffect } from "react";
import "./HeroSection.css";

function HeroSection({ title, text }) {
  return (
    <section
      className="hero-section home-page set-bg"
      data-setbg="img/bg.jpg"
      style={{ backgroundImage: "url(/images/bg.jpg)" }}
    >
      <div className="container hero-text text-white">
        {title ? <h1>{title}</h1> : null}

        <h2>{text}</h2>
      </div>
    </section>
  );
}

export default HeroSection;
