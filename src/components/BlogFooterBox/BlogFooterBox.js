import React from "react";
import "./BlogFooterBox.css";
import { Link } from "react-router-dom";

function BlogFooterBox(props) {
  return (
    <div className="blog-footer-box my-4">
      <div className="row">
        <div className="col-3">
          <img src={props.cover} alt="blog" className="img-blog-footer" />
        </div>
        <div className="col-9">
          <h6 className="title">{props.title}</h6>
          <div className="row">
            <div className="date col-6">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              {props.createAt}
            </div>
            <Link to={`/blog/${props.id}`} className="more col-6">
              <span>
                <i className="fa-solid fa-circle-chevron-right"></i>
              </span>
              Read more{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFooterBox;
