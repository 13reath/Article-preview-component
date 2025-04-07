import React, { useState } from "react";

export default function App() {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive((active) => !active);
  }

  return (
    <main>
      <div className="card">
        <div className="card-image">
          <img
            className="banner"
            src={process.env.PUBLIC_URL + "/images/drawers.jpg"}
            alt="img"
          />
        </div>

        <div className="card-content">
          <h1 className="card-heading">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="card-description">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        {active ? (
          <div className="profile">
            <img
              className="profile-image"
              src={process.env.PUBLIC_URL + "./images/avatar-michelle.jpg"}
              alt="avatar"
            />
            <div className="profile-info">
              <p>Michelle Appleton</p>
              <span>28 Jun 2020</span>
            </div>
            <button onClick={handleClick} class="profile-icon-share">
              <img
                src={process.env.PUBLIC_URL + "./images/icon-share.svg"}
                alt="share"
                className="share-icon"
              />
            </button>
          </div>
        ) : (
          <div className="profile-alt">
            <p>SHARE</p>

            <div className="profile-icons">
              <img
                src={process.env.PUBLIC_URL + "./images/icon-facebook.svg"}
                alt="facebook"
              />
              <img
                src={process.env.PUBLIC_URL + "./images/icon-pinterest.svg"}
                alt="pinterest"
              />
              <img
                src={process.env.PUBLIC_URL + "./images/icon-twitter.svg"}
                alt="twitter"
              />
            </div>

            <button onClick={handleClick} className="profile-icon-share">
              <img
                src={process.env.PUBLIC_URL + "./images/icon-share.svg"}
                alt="share"
                className="share-icon"
              />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
