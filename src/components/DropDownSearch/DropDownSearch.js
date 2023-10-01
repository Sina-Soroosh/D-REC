import React, { useState } from "react";
import "./DropDownSearch.css";

function DropDown({ value, setChange }) {
  const [isShowList, setIsShowList] = useState(false);

  const selectItem = (value) => {
    setChange(value);
  };

  return (
    <div
      className={`dropdown dropdown-search ${isShowList ? "active" : ""}`}
      onMouseLeave={() => setIsShowList(false)}
      onMouseEnter={() => setIsShowList(true)}
    >
      <div className="select">
        <span>{value}</span>
        <i className="fa fa-chevron-down icon"></i>
      </div>
      <input type="hidden" name="gender" />
      <ul className="dropdown-menu">
        <li onClick={() => selectItem({ value: "", text: "Sort by default" })}>
          Sort by default
        </li>
        <li onClick={() => selectItem({ value: "old", text: "The oldest" })}>
          The oldest
        </li>
        <li onClick={() => selectItem({ value: "new", text: "The newest" })}>
          The newest
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
