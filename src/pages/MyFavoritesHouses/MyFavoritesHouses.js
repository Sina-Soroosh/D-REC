import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import HouseBox from "../../components/HouseBox/HouseBox";
import Pagination from "./../../components/Pagination/Pagination";
import data from "../../data";

function MyFavoritesHouses() {
  const [houses, setHouses] = useState([]);
  const [ShownHouses, setShownHouses] = useState([]);
  const [getHouses, setGetHouses] = useState(false);
  const [pageActive, setPageActive] = useState(1);
  const [manyPages, setManyPages] = useState(1);
  const [manyShowItem, setManyShowItem] = useState(6);

  useEffect(() => {
    let myFavorites = JSON.parse(localStorage.getItem("myFavorites")) || [];
    let housesFavorites = data.houses.filter((house) => {
      return myFavorites.some((houseID) => +houseID === +house.id);
    });

    setHouses(housesFavorites);
  }, [getHouses]);

  useEffect(() => {
    setManyPages(Math.ceil(houses.length / manyShowItem));
  }, [houses]);

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
  }, [pageActive, houses]);

  const changePage = (page) => {
    setPageActive(page);
  };

  const addFavorite = () => {
    setGetHouses((prevGetHouses) => !prevGetHouses);
  };

  return (
    <>
      <HeroSection text="My Favorites Houses" />
      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>

      <div className="houses">
        <div className="container">
          <div className="row">
            {ShownHouses.map((house) => (
              <HouseBox key={house.id} {...house} addFavorite={addFavorite} />
            ))}
            <Pagination
              manyPages={manyPages}
              pageActive={pageActive}
              changePage={changePage}
            />
            {houses.length ? null : (
              <div className="alert alert-danger fs-4">
                You have not added a house to your favorites list yet
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFavoritesHouses;
