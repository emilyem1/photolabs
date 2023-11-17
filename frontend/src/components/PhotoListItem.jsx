import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
  <div className="photo-list__item">

    <img src={props.imageSource} alt="Photo" className="photo-list__image" />

    <div className="photo-list__user-details">

      <img src={props.profile} alt="Profile" className="photo-list__user-profile" />

      <div className="photo-list__user-info">
        <div className="photo-list__user-username">
          <p>{props.username}</p>
        </div>
        <div className="photo-list__user-location">
          <p>
            {props.location.city},{" "}
            {props.location.country}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;
