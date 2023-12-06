import { CiSearch } from "react-icons/ci";
import "./SearchBar.scss";

function SearchBar({ userValue, handleUserChange, handleSubmitSearch }) {
  return (
    <div className="searchbar">
      <p>
        <CiSearch />
      </p>
      <input
        name="searchbar"
        id="searchbar"
        className="searchbar__input input"
        value={userValue}
        onChange={handleUserChange}
        placeholder="Search GitHub username …"
      />
      <button className="searchbar__btn btn" onClick={handleSubmitSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
