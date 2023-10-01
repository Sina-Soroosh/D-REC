import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import TeamBox from "../../components/TeamBox/TeamBox";
import data from "../../data";

function AboutUs() {
  const [staffs, setStaffs] = useState(data.staffs);

  return (
    <>
      <HeroSection text="Know a little more about us" />
      <div className="about-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 about-text-warp">
              <div className="about-text">
                <h2>Welcome to the realtor site</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  rerum soluta sint placeat perspiciatis ullam, tenetur dolores
                  illum id necessitatibus, repellat corporis architecto, tempore
                  eaque adipisci aliquam possimus. Vel facere in voluptates
                  soluta dignissimos, et iure iste! Magnam laudantium officiis
                  provident aut pariatur consectetur earum possimus cum facere
                  fugiat ratione distinctio, in obcaecati sapiente assumenda!
                  Fuga earum veritatis quasi, tempore repellat tenetur harum
                  perspiciatis, obcaecati dolore fugiat voluptas a quo voluptate
                  omnis, tempora numquam deleniti maxime. Nobis assumenda hic
                  aut veniam sit accusamus iste voluptates corporis odit vel,
                  eius minima neque dolorem debitis error non numquam natus
                  consectetur doloribus ab?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  cum maxime quos dolore animi consectetur iste ipsa dolores
                  aspernatur laborum optio, nemo id reiciendis debitis quidem
                  sint explicabo magni expedita? Fugit, harum minus sint
                  assumenda, voluptates consequatur voluptatem unde libero
                  eligendi cum, quaerat voluptate asperiores laboriosam
                  molestiae! Architecto debitis minus iusto repellat amet beatae
                  veniam est praesentium officia. Et debitis illum optio
                  repellat provident adipisci eaque velit, enim consequatur
                  harum qui omnis ducimus eligendi inventore.
                </p>
                <Link to="/houses" className="btn">
                  See our properties
                </Link>
              </div>
            </div>
            <div className="col-xl-6 images">
              <div>
                <img src="/images/1.jpg" alt="" />
              </div>
              <div>
                <img src="/images/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="section-title">
          <h2>
            <p>In our collection</p>
            Experienced and committed staff
          </h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {staffs.map((staff) => (
              <TeamBox key={staff.id} {...staff} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
