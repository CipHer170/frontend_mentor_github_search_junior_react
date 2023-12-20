import React from "react";
import "./Result.scss";
import UserInfo from "../UserInfo/UserInfo";
import { data } from "../../data";

function Result() {
  return (
    <div className="result">
      <div className="result__container">
        {data.map((item, index) => {
          return <UserInfo item={item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Result;
