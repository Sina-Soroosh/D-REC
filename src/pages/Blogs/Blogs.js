import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import "./Blogs.css";
import BlogBox from "../../components/BlogBox/BlogBox";
import Pagination from "../../components/Pagination/Pagination";
import data from "../../data";
import HouseBox from "../../components/HouseBox/HouseBox";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [shownBlogs, setShownBlogs] = useState([]);
  const [pageActive, setPageActive] = useState(1);
  const [manyPages, setManyPages] = useState(1);
  const [manyShowItem, setManyShowItem] = useState(3);
  const [randomHouses, setRandomHouses] = useState([]);

  useEffect(() => {
    setManyPages(Math.ceil(blogs.length / manyShowItem));
  }, [blogs]);

  useEffect(() => {
    let random = data.houses.sort(() => Math.random() - Math.random());

    setRandomHouses([random[0], random[1], random[2], random[3]]);
    setBlogs(data.blogs);
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let filterBlogs = [...blogs];
    let firstIndex = pageActive * manyShowItem - manyShowItem;
    let lastIndex = pageActive * manyShowItem;

    filterBlogs = filterBlogs.slice(firstIndex, lastIndex);

    setShownBlogs(filterBlogs);
  }, [pageActive, blogs]);

  const changePage = (page) => {
    setPageActive(page);
  };

  return (
    <>
      <HeroSection text="Blogs" />
      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>

      <div className="blogs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blogs-content">
                {shownBlogs.map((blog) => (
                  <BlogBox key={blog.id} {...blog} />
                ))}
              </div>
              <Pagination
                manyPages={manyPages}
                pageActive={pageActive}
                changePage={changePage}
              />
            </div>
            <div className="col-lg-4">
              <div className="row">
                {randomHouses.map((house) => (
                  <div key={house.id} className="my-3 col-lg-12 col-md-6">
                    <HouseBox isRelated={true} {...house} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
