import { useContext, useEffect } from "react";
import "./App.scss";
import Provider, { DataContext } from "./context/DataContext";
import SearchPage from "./pages/SearchPage";

function App() {
  // const dataProps = {};

  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

export default App;
