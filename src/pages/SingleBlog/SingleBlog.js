import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import "./SingleBlog.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data";
import domPurify from "dompurify";
import BlogBox from "../../components/BlogBox/BlogBox";
import HouseBox from "../../components/HouseBox/HouseBox";

function SingleBlog() {
  const [blog, setBlog] = useState({});
  const [house, setHouse] = useState({});
  const [relatedBlog, setRelatedBlog] = useState({});
  const { blogID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    let indexBlog = data.blogs.findIndex((blog) => +blog.id === +blogID);
    let randomHouse = data.houses.sort(() => Math.random() - Math.random());

    if (indexBlog !== -1) {
      if (indexBlog === data.blogs.length - 1) {
        setRelatedBlog(data.blogs[indexBlog - 1]);
      } else {
        setRelatedBlog(data.blogs[indexBlog + 1]);
      }

      setHouse(randomHouse[0]);
      setBlog(data.blogs[indexBlog]);
    } else {
      navigate("/404");
    }
  }, [blogID]);

  return (
    <>
      <HeroSection text={blog.title} />
      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-12 image-blog">
              <img src={blog.cover} alt={blog.title} className="img-blog" />
            </div>
            <div className="col-lg-8" data-aos="fade-up">
              <div className="content-blog">
                <div className="title-blog">
                  <h2>{blog.title}</h2>
                </div>
                <div
                  className="body-blog"
                  dangerouslySetInnerHTML={{
                    __html: domPurify.sanitize(blog.body),
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="row">
                <BlogBox {...relatedBlog} />
                <HouseBox isRelated={true} {...house} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
