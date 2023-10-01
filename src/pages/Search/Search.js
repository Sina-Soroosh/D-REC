import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import { useLocation, useParams } from "react-router-dom";
import DropDownSearch from "./../../components/DropDownSearch/DropDownSearch";
import data from "../../data";
import "./Search.css";
import HouseBox from "../../components/HouseBox/HouseBox";
import Pagination from "../../components/Pagination/Pagination";

function Search() {
  const [houses, setHouses] = useState([]);
  const [shownHouses, setShownHouses] = useState([]);
  const [category, setCategory] = useState("all");
  const [pageActive, setPageActive] = useState(1);
  const [manyPages, setManyPages] = useState(1);
  const [manyShowItem, setManyShowItem] = useState(6);
  const [sortBy, setSortBy] = useState({ value: "", text: "Sort by default" });
  const { city, type, room, bathroom, maxPrice } = useParams();
  const location = useLocation();

  useEffect(() => {
    let housesSearch = [];
    let findCity = data.cities.find((cityItem) => cityItem.name === city);
    let findType = data.propertiesTypes.find(
      (typeItem) => typeItem.name === type
    );
    if (findCity && findType) {
      housesSearch = data.houses.filter(
        (house) => house.cityID === findCity.id && house.typeID === findType.id
      );

      if (+room !== 0) {
        if (room === "+4") {
          housesSearch = housesSearch.filter((house) => house.bedroom >= 4);
        } else {
          housesSearch = housesSearch.filter(
            (house) => house.bedroom === +room
          );
        }
      }

      if (+bathroom !== 0) {
        if (bathroom === "+4") {
          housesSearch = housesSearch.filter((house) => house.bathroom >= 4);
        } else {
          housesSearch = housesSearch.filter(
            (house) => house.bathroom === +bathroom
          );
        }
      }

      if (+maxPrice > 0) {
        housesSearch = housesSearch.filter((house) => house.price <= maxPrice);
      }

      setManyPages(Math.ceil(housesSearch.length / manyShowItem));
      setHouses(housesSearch);
    }
  }, [location]);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let filterHouses = [...houses];
    let firstIndex = pageActive * manyShowItem - manyShowItem;
    let lastIndex = pageActive * manyShowItem;

    if (sortBy.value === "old") {
      filterHouses.reverse();
    }

    if (category === "rent") {
      filterHouses = filterHouses.filter((house) => !house.isSale);
    } else if (category === "sale") {
      filterHouses = filterHouses.filter((house) => house.isSale);
    }

    filterHouses = filterHouses.slice(firstIndex, lastIndex);
    setShownHouses(filterHouses);
  }, [houses, sortBy.value, pageActive, category]);

  useEffect(() => {
    setPageActive(1);

    let filterHouses = [...houses];
    let firstIndex = pageActive * manyShowItem - manyShowItem;
    let lastIndex = pageActive * manyShowItem;

    if (category === "rent") {
      filterHouses = filterHouses.filter((house) => !house.isSale);
    } else if (category === "sale") {
      filterHouses = filterHouses.filter((house) => house.isSale);
    }

    setManyPages(Math.ceil(filterHouses.length / manyShowItem));
  }, [category, houses]);

  const changePage = (page) => {
    setPageActive(page);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <HeroSection text={`Search result in ${city}`} />
      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>
      <div className="content-search">
        <div className="container">
          <div className="found-items">
            <h4>
              <span>{houses.length}</span> properties were found
            </h4>
            <div className="d-sm-flex my-md-0 my-3">
              <div className="mx-sm-3 d-flex gap-2 my-3 my-sm-0 categories">
                <div className="category-item">
                  <input
                    type="radio"
                    name="category"
                    id="rent"
                    value="rent"
                    className="d-none"
                    onInput={changeCategory}
                  />
                  <label
                    htmlFor="rent"
                    className={`btn ${category === "rent" ? "active" : ""}`}
                  >
                    Show for Rent
                  </label>
                </div>
                <div className="category-item">
                  <input
                    type="radio"
                    name="category"
                    id="sale"
                    value="sale"
                    className="d-none"
                    onInput={changeCategory}
                  />
                  <label
                    htmlFor="sale"
                    className={`btn ${category === "sale" ? "active" : ""}`}
                  >
                    Show for Sale
                  </label>
                </div>
                <div className="category-item">
                  <input
                    type="radio"
                    name="category"
                    id="all"
                    value="all"
                    className="d-none"
                    onInput={changeCategory}
                  />
                  <label
                    htmlFor="all"
                    className={`btn ${category === "all" ? "active" : ""}`}
                  >
                    Show All
                  </label>
                </div>
              </div>
              <DropDownSearch setChange={setSortBy} value={sortBy.text} />
            </div>
          </div>
          {shownHouses.length ? (
            <>
              <div className="row my-3">
                {shownHouses.map((house) => (
                  <HouseBox key={house.id} {...house} />
                ))}
              </div>
              <Pagination
                manyPages={manyPages}
                pageActive={pageActive}
                changePage={changePage}
              />
            </>
          ) : (
            <div className="alert alert-danger my-3 fs-5">No house found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
