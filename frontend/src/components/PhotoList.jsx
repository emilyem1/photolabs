import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { updateToFavPhotoIds, onPhotoSelect, photos, favourite } = props;
  const photo = photos.map((details) => {
    return <PhotoListItem
      key={details.id}
      data={details}
      updateToFavPhotoIds={updateToFavPhotoIds}
      onPhotoSelect={onPhotoSelect}
      favourite={favourite}
    />
  });
  return <ul className="photo-list">{photo}</ul>
};

export default PhotoList;
