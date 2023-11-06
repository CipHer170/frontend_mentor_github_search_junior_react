import { useState } from "react";
import { CiSearch } from "react-icons/ci";
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
    <div className="searchbar">
      <p>
        <CiSearch />
      </p>
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        className="searchbar__input input"
        value={userValue}
        onChange={handleUserChange}
        placeholder="Search GitHub username …"
      />
      <button className="searchbar__btn btn" onSubmit={handleSubmitSearch}>
        Search
      </button>
      <p>{userValue}</p>
    </div>
  );
}

export default SearchBar;
