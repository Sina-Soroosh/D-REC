import React, { useState } from "react";
import "./DropDown.css";

function DropDown({ items, value, setChange, isLocation }) {
  const [isShowList, setIsShowList] = useState(false);

  const selectItem = (value) => {
    setChange(value);
  };

  return (
    <div
      className={`dropdown ${isShowList ? "active" : ""}`}
      onMouseLeave={() => setIsShowList(false)}
      onMouseEnter={() => setIsShowList(true)}
    >
      <div className="select">
        <span>{value}</span>
        <i className="fa fa-chevron-down icon"></i>
      </div>
      <input type="hidden" name="gender" />
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item.id} onClick={() => selectItem(item.name)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
