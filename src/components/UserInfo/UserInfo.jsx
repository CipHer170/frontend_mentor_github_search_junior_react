import React from "react";
import LinkBar from "../LinkBar/LinkBar";

function UserInfo({ item }) {
  return (
    <div className="resul">
      <div className="result__user">
        <div className="result__image">
          <img src={item.biophoto} alt="user info" className="image" />
        </div>
        <div className="result__info">
          <div className="result__info-details">
            <h1 className="result__title">
              {item.name}
              <span className="result__date">
                Joined {item.joinDay} {item.joinMonth} {item.joinYear}
              </span>
            </h1>
            <a rel="stylesheet" href="/" className="result__account">
              {item.linkbio}
            </a>
            <h4 className="result__bio">
              {item.bio ? item.bio : "User has no bio"}
            </h4>
          </div>
        </div>
      </div>
      <LinkBar />
    </div>
  );
}

// id: 2,
// name: "The Sonocat",
// joinDay: 7,
// joinMonth: "June",
// joinYear: 2012,
// biophoto: noImage,
// bio: "",
// repos: 8,
// followers: 3938,
// following: 9,
// livegeo: "San Francisco",
// twitter: "https://twitter.blog",
// workplace: "@github",
// linkbio: "https://github.blog",

export default UserInfo;
