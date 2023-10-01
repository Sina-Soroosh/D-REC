import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import data from "../../data";
import HouseBox from "../../components/HouseBox/HouseBox";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import "./Houses.css";
import Pagination from "../../components/Pagination/Pagination";

function Houses() {
  const [houses, setHouses] = useState(data.houses.reverse());
  const [ShownHouses, setShownHouses] = useState([]);
  const [pageActive, setPageActive] = useState(1);
  const [manyPages, setManyPages] = useState(1);
  const [manyShowItem, setManyShowItem] = useState(6);

  useEffect(() => {
    setManyPages(Math.ceil(houses.length / manyShowItem));
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let filterHouses = [...houses];
    let firstIndex = pageActive * manyShowItem - manyShowItem;
    let lastIndex = pageActive * manyShowItem;

    filterHouses = filterHouses.slice(firstIndex, lastIndex);
    setShownHouses(filterHouses);
  }, [pageActive]);

  const changePage = (page) => {
    setPageActive(page);
  };

  return (
    <>
      <HeroSection text="List of our properties" />
      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>
      <div className="houses">
        <div className="container">
          <div className="row">
            {ShownHouses.map((house) => (
              <HouseBox key={house.id} {...house} />
            ))}
            <Pagination
              manyPages={manyPages}
              pageActive={pageActive}
              changePage={changePage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Houses;
