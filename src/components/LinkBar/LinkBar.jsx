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
    <div>
      {" "}
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
  );
}

export default LinkBar;
