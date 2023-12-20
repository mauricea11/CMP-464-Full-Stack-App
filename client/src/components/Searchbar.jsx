import React from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="inputwrapper">
      <FaSearch id="search-icon" />
      <input type="text" placeholder="Type something..." />
    </div>
  );
}

export default Searchbar;
