import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { useNavigate, useParams } from "react-router-dom";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import data from "../../data";
import Pagination from "../../components/Pagination/Pagination";
import HouseBox from "../../components/HouseBox/HouseBox";

function SalesConsultant() {
  const [houses, setHouses] = useState([]);
  const { consultantName } = useParams();
  const [ShownHouses, setShownHouses] = useState([]);
  const [pageActive, setPageActive] = useState(1);
  const [manyPages, setManyPages] = useState(1);
  const [manyShowItem, setManyShowItem] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    let mainConsultant = data.consultants.find(
      (consultant) => consultant.name === consultantName
    );
    if (mainConsultant) {
      let houses = data.houses.filter(
        (house) => house.consultantID === mainConsultant.id
      );

      setManyPages(Math.ceil(houses.length / manyShowItem));

      setHouses(houses);
    } else {
      navigate("/404");
    }
  }, [consultantName]);

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

  return (
    <>
      <HeroSection text={`Property for ${consultantName} `} />
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

export default SalesConsultant;
