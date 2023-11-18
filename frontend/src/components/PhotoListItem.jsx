import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = (props) => {
  const { data, favourite, setFavourite } = props;
  const addFavourite = () => {
    setFavourite([...favourite, data.id])
    console.log(`I'm working, I'm just one behind: ${favourite}`)
  } 
  return (
  <div className="photo-list__item">
    <PhotoFavButton addFavourite={addFavourite} />
    <img src={data.urls.regular} alt="Photo" className="photo-list__image" />

    <div className="photo-list__user-details">

      <img src={data.user.profile} alt="Profile" className="photo-list__user-profile" />

      <div className="photo-list__user-info">
        <div className="photo-list__user-username">
          <p>{data.user.name}</p>
        </div>
        <div className="photo-list__user-location">
          <p>
            {data.location.city},{" "}
            {data.location.country}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;
