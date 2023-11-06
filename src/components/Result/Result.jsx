import React from "react";
import userInfo from "../../assets/Bitmap.svg";
import "./Result.scss";
import {
  BsFillBuildingsFill,
  BsFillGeoAltFill,
  BsLink45Deg,
  BsTwitter,
} from "react-icons/bs";
function Result() {
  return (
    <div className="result">
      <div className="result__container">
        <div className="result__user">
          <div className="result__image">
            <img src={userInfo} alt="user info" className="image" />
          </div>
          <div className="result__info">
            <div className="result__info-details">
              <h1 className="result__title">
                The Octocat
                <h4 className="result__date">Joined 25 Jan 2011</h4>
              </h1>

              <a rel="stylesheet" href="/" className="result__account">
                @octocat
              </a>
              <h4 className="result__bio">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </h4>
            </div>
          </div>
        </div>
        <div className="result__links">
          <div className="result__repos">
            <table>
              <tr className="table_title">
                <th>repos</th>
                <th>followers</th>
                <th>following</th>
              </tr>
              <tr className="table_info">
                <td>8</td>
                <td>3938</td>
                <td>9</td>
              </tr>
            </table>
          </div>
          <div className="result__link">
            <a href="/">
              {" "}
              <BsFillGeoAltFill />
              San Francisco
            </a>

            <a href="/">
              <BsTwitter />
              Not Available
            </a>
            <a href="/">
              <BsLink45Deg />
              https://github.blog
            </a>

            <a href="/">
              <BsFillBuildingsFill />
              @github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
