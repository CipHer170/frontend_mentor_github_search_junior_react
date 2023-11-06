import React from "react";
import userInfo from "../../assets/Bitmap.svg";
import "./Result.scss";

function Result() {
  return (
    <div className="result">
      <div className="result__container">
        <div className="result__user">
          <div className="result__image">
            <img src={userInfo} alt="user info" />
          </div>
          <div className="result__info">
            <p>
              The Octocat <br />
              @octocat this profile has no bio
            </p>
            <p>Joined 25 Jan 2011</p>
          </div>
          {/* <div className="user__repos">repos 8 followers 3938 following 9</div>
      <div className="user__links">geo github work twitter</div> */}
        </div>
      </div>
    </div>
  );
}

export default Result;
