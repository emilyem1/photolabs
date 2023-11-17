import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { location, imageSource, username, profile } = props; // Destructure
  return (
  <div className="photo-list__item">

    <img src={imageSource} alt="Photo" className="photo-list__image" />

    <div className="photo-list__user-details">

      <img src={profile} alt="Profile" className="photo-list__user-profile" />

      <div className="photo-list__user-info">
        <div className="photo-list__user-username">
          <p>{username}</p>
        </div>
        <div className="photo-list__user-location">
          <p>
            {location.city},{" "}
            {location.country}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;
