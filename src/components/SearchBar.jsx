import { React, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { getData } from "../api/FetchFromApi";
import { useFormik } from "formik";

function SearchBar() {
  const [searchData, setSearchData] = useState([]);

  const { values, handleChange, handleBlur } = useFormik({
    initialValues: {
      search: "",
    },
  });

  const dataforApi = values.search;
  const fetcgdata = () => {
    getData(dataforApi).then((res) => {
      setSearchData(res.data);
    });
  };

  useEffect(fetcgdata, []);

  const handleClick = (e) => {
    e.preventDefault();
    fetcgdata();
  };

  return (
    <form className="search-bar">
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Enter a City..."
        value={values.search}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit" className="search-icon" onClick={handleClick}>
        <BiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
