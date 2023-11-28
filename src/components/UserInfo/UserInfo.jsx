import React from "react";

function UserInfo({ item, index }) {
  return (
    item.id === 2 && (
      <div className="result__user">
        <div className="result__image">
          <img src={item.biophoto} alt="user info" className="image" />
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
    )
  );
}

export default UserInfo;
