import { CiSearch } from "react-icons/ci";
import "./SearchBar.scss";
import { useEffect, useState } from "react";
import axios from "axios";
function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState({});

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const accessToken = "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";

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${userInput}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(res);
      // console.log(user);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="searchbar">
      <p>
        <CiSearch />
      </p>
      <input
        name="searchbar"
        id="searchbar"
        className="searchbar__input input"
        placeholder="Search GitHub username …"
        value={userInput}
        onChange={handleUserInput}
      />
      <button className="searchbar__btn btn">Search</button>
    </div>
  );
}

export default SearchBar;
