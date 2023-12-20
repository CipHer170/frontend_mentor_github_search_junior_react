import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import "./SearchPage.scss";
import Result from "../components/Result/Result";
import { data } from "../data";

function SearchPage() {
  const [light, setLight] = useState(true);

  const changeTheme = (e) => {
    setLight(!light);
  };

  return (
    <div className="searchPage">
      <div className="searchPage__container">
        <div className="searchPage__header">
          <h2>devfinder</h2>
          <button className="theme" onClick={(e) => changeTheme(e)}>
            {light ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <SearchBar />
      {data && <Result />}
    </div>
  );
}

export default SearchPage;
