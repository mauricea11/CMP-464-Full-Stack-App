import React, { useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [input, setInput] = useState("");
  return (
    <div className="inputwrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
