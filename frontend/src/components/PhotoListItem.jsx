import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
  <div className="PhotoItem">
    <img src={props.imageSource} alt="Photo" />
    <div className="UserInfo">
      <img src={props.profile} alt="Profile" />
      <div className="UserDetails">
        <p>{props.username}</p>
        <p>
          {props.location.city},{" "}
          {props.location.country}
        </p>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;
