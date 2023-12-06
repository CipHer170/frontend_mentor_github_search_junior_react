import { createContext, useState } from "react";

const DataContext = createContext();

function Provider({ children }) {
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

  const value = {
    getData,
    handleSubmitSearch,
    handleUserChange,
    isLoaded,
    setIsLoaded,
    error,
    setError,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export { DataContext };
export default Provider;
export function dataFormatter(data = {}) {
  const objectToArray = Object.entries(data || {});
  const newData = objectToArray.map((item) => ({
    ...item[1],
    id: item[0],
  }));
  return newData;
}
