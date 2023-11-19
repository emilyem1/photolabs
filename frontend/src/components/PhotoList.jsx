import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, addFavourite, toggleModal, setSelectedPhoto } = props;
  const photo = photos.map((details) => {
    return <PhotoListItem 
      key={details.id}
      data={details}
      toggleModal={toggleModal}
      setSelectedPhoto={setSelectedPhoto}
      addFavourite={addFavourite}
    />;
  });
  return <ul className="photo-list">{photo}</ul>
};

export default PhotoList;
