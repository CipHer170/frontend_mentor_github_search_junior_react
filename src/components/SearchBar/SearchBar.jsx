import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

function SearchBar() {
  const [userValue, setUserValue] = useState();
  const handleUserChange = (e) => {
    e.preventDefault();
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setUserValue(e.target.value);
  };
  return (
    <div className="searchbar input">
      <p>{BsSearch}</p>
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        className="searchbar__input"
        value={userValue}
        onChange={handleUserChange}
      />
      <button className="searchbar__btn btn" onSubmit={handleSubmitSearch}>
        Search
      </button>
      <p>{userValue}</p>
    </div>
  );
}

export default SearchBar;
