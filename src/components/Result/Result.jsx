import React from "react";
import "./Result.scss";
import LinkBar from "../LinkBar/LinkBar";
import UserInfo from "../UserInfo/UserInfo";

function Result({ userValue }) {
  return (
    <div className="result">
      <div className="result__container">
        {userValue.map((item, index) => {
          return <UserInfo item={item} index={index} key={index} />;
        })}
      </div>
      <LinkBar />
    </div>
  );
}

export default Result;
