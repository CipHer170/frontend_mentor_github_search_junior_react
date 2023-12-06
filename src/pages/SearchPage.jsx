import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import "./SearchPage.scss";
import Result from "../components/Result/Result";

function SearchPage() {
  const [light, setLight] = useState(true);

  const changeTheme = (e) => {
    setLight(!light);
  };

  const [userValue, setUserValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleUserChange = (e) => {
    setUserValue(e.target.value);
  };

  const handleSubmitSearch = () => {
    getData(userValue);
  };

  const getData = (username) => {
    const accessToken = "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";

    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.message !== undefined) {
            setIsLoaded(true);
            setError(result);
          } else {
            setIsLoaded(true);
            setUserValue(result);
            setError(null);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect (() => {
    getData();
  }, []);

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
      <SearchBar
        handleSubmitSearch={handleSubmitSearch}
        handleUserChange={handleUserChange}
        userValue={userValue}
      />
      <Result userValue={userValue} />
    </div>
  );
}

export default SearchPage;
