import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  return (
  <div className="PhotoItem">
    <img src={sampleDataForPhotoListItem.imageSource} alt="Photo" />
    <div className="UserInfo">
      <img src={sampleDataForPhotoListItem.profile} alt="Profile" />
      <div className="UserDetails">
        <p>{sampleDataForPhotoListItem.username}</p>
        <p>
          {sampleDataForPhotoListItem.location.city},{" "}
          {sampleDataForPhotoListItem.location.country}
        </p>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;
