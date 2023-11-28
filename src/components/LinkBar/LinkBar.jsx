import React from "react";
import {
  BsFillBuildingsFill,
  BsFillGeoAltFill,
  BsLink45Deg,
  BsTwitter,
} from "react-icons/bs";
import "./LinkBar.scss";

function LinkBar() {
  return (
    <div className="resultLink">
      <div className="result__links">
        <div className="result__repos">
          <table>
            <thead className="table_title">
              <tr>
                <th>repos</th>
                <th>followers</th>
                <th>following</th>
              </tr>
            </thead>

            <tbody className="table_info">
              <tr>
                <td>8</td>
                <td>3938</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="result__link">
          <a href="/">
            <BsFillGeoAltFill />
            <h4>San Francisco</h4>
          </a>

          <a href="/">
            <BsTwitter />
            <h4>Not Available</h4>
          </a>
          <a href="/">
            <BsLink45Deg />
            <h4>https://github.blog</h4>
          </a>

          <a href="/">
            <BsFillBuildingsFill />
            <h4>@github</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinkBar;
