import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const url = "http://localhost:3000/data";

  // Match input value with user entries by filtering results
  const handleChange = "";

  // Get list of data
  useEffect(() => {
    async function getData() {
      const resp = await fetch(url);
      const jsondata = await resp.json();
      setData(jsondata);
    }

    getData();
  }, []);
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
