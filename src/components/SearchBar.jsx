import { React, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FetchFromApi } from "../api/FetchFromApi";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  console.log(searchData);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    FetchFromApi(`current?part=snippet&q=${searchTerm}`).then((data) =>
      setSearchData(data)
    );
  }, [handleSubmit]);

  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Enter a City..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit" className="search-icon" onClick={handleSubmit}>
        <BiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
