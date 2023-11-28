import React from "react";
import "./Result.scss";
import LinkBar from "../LinkBar/LinkBar";
import { data } from "../../data";
import UserInfo from "../UserInfo/UserInfo";
function Result() {
  return (
    <div className="result">
      <div className="result__container">
        {data.map((item, index) => {
          return <UserInfo item={item} index={index} key={index} />;
        })}
      </div>
      <LinkBar />
    </div>
  );
}

export default Result;
