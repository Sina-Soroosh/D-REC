import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogBox.css";
import AOS from "aos";
import "aos/dist/aos.css";

function BlogBox(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="blog-box" data-aos="fade-up">
      <div className="content-blog-box">
        <div className="image-blog">
          <img src={props.cover} alt={props.title} />

          <div className="text-blog">
            <div className="title-blog">
              <h3>{props.title}</h3>
              <p>
                <span>
                  <span>
                    <i className="fa-solid fa-clock"></i>
                  </span>
                  {props.createAt}
                </span>
                <span>
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  {props.creator}
                </span>
              </p>
            </div>
            <div className="desc-blog">
              <p>{props.desc}</p>
            </div>
          </div>
          <div className="details">
            <Link to={`/blog/${props.id}`} className="btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
