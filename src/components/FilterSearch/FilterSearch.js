import React, { useEffect, useRef, useState } from "react";
import "./FilterSearch.css";
import DropDown from "./DropDown/DropDown";
import data from "../../data";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function FilterSearch() {
  const [locations, setLocations] = useState(data.cities);
  const [propertyTypes, setPropertyTypes] = useState(data.propertiesTypes);
  const [location, setLocation] = useState(data.cities[0].name);
  const [propertyType, setPropertyType] = useState(
    data.propertiesTypes[0].name
  );
  const [manyBathroom, setManyBathroom] = useState(0);
  const [manyRoom, setManyRoom] = useState(0);
  let maxPriceRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const searchForHouse = (e) => {
    e.preventDefault();

    let maxPrice = 0;

    maxPriceRef.current.value === ""
      ? (maxPrice = 0)
      : (maxPrice =
          maxPriceRef.current.value > 0 ? maxPriceRef.current.value : 0);

    navigate(
      `/search/${location}/${propertyType}/${manyRoom}/${manyBathroom}/${maxPrice}`
    );
  };

  const setRoom = (e) => {
    setManyRoom(e.target.value);
  };

  const setBathroom = (e) => {
    setManyBathroom(e.target.value);
  };

  return (
    <div className="filter-search col-lg-12 col-md-6 col-12" data-aos="fade-up">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <form className="row" onSubmit={searchForHouse}>
              <div className="col-12 col-lg-2">
                <div className="item-search">
                  <p>Location</p>
                  <DropDown
                    isLocation={true}
                    items={locations}
                    value={location}
                    setChange={setLocation}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="item-search">
                  <p>Property Type</p>
                  <DropDown
                    isLocation={false}
                    items={propertyTypes}
                    value={propertyType}
                    setChange={setPropertyType}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="item-search">
                  <p>Maximum price</p>
                  <input
                    type="number"
                    placeholder="Example: 300,000"
                    min={0}
                    ref={maxPriceRef}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="item-search">
                  <p>Room</p>
                  <div className="room-filter-pagi">
                    <div className="bf-item">
                      <input
                        value={1}
                        type="radio"
                        name="room"
                        id="room-1"
                        onInput={setRoom}
                      />
                      <label
                        htmlFor="room-1"
                        className={manyRoom === "1" ? "active" : ""}
                      >
                        1
                      </label>
                    </div>
                    <div className="bf-item">
                      <input
                        value={2}
                        type="radio"
                        name="room"
                        id="room-2"
                        onInput={setRoom}
                      />
                      <label
                        htmlFor="room-2"
                        className={manyRoom === "2" ? "active" : ""}
                      >
                        2
                      </label>
                    </div>
                    <div className="bf-item">
                      <input
                        value={3}
                        type="radio"
                        name="room"
                        id="room-3"
                        onInput={setRoom}
                      />
                      <label
                        htmlFor="room-3"
                        className={manyRoom === "3" ? "active" : ""}
                      >
                        3
                      </label>
                    </div>
                    <div className="bf-item">
                      <input
                        value="+4"
                        type="radio"
                        name="room"
                        id="room-4"
                        onInput={setRoom}
                      />
                      <label
                        htmlFor="room-4"
                        className={manyRoom === "+4" ? "active" : ""}
                      >
                        4+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="item-search">
                  <p>Bathroom</p>
                  <div className="room-filter-pagi">
                    <div className="bf-item">
                      <input
                        value={1}
                        type="radio"
                        name="bathroom"
                        id="bathroom-1"
                        onInput={setBathroom}
                      />
                      <label
                        className={manyBathroom === "1" ? "active" : ""}
                        htmlFor="bathroom-1"
                      >
                        1
                      </label>
                    </div>
                    <div className="bf-item">
                      <input
                        value={2}
                        type="radio"
                        name="bathroom"
                        id="bathroom-2"
                        onInput={setBathroom}
                      />
                      <label
                        className={manyBathroom === "2" ? "active" : ""}
                        htmlFor="bathroom-2"
                      >
                        2
                      </label>
                    </div>
                    <div className="bf-item">
                      <input
                        value={3}
                        type="radio"
                        name="bathroom"
                        id="bathroom-3"
                        onInput={setBathroom}
                      />
                      <label
                        className={manyBathroom === "3" ? "active" : ""}
                        htmlFor="bathroom-3"
                      >
                        3
                      </label>
                    </div>
                    <div className="bf-item">
                      <input
                        value="+4"
                        type="radio"
                        name="bathroom"
                        id="bathroom-4"
                        onInput={setBathroom}
                      />
                      <label
                        className={manyBathroom === "+4" ? "active" : ""}
                        htmlFor="bathroom-4"
                      >
                        4+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-1" onClick={searchForHouse}>
                <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSearch;
