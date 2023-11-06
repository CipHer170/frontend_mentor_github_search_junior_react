import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import "./SearchPage.scss";
import Result from "../components/Result/Result";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h2>devfinder</h2>
        <button className="theme">light</button>
      </div>
      <SearchBar />
      <Result />
    </div>
  );
}

export default SearchPage;
