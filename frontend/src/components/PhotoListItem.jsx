import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = (props) => {
  const { data, favourite, setFavourite } = props;
  const addFavourite = () => {
    const isExisting = favourite.includes(data.id);
    if (isExisting) {
      // If data.id exists, remove it from the array
      const updatedFavourites = favourite.filter((id) => id !== data.id);
      setFavourite(updatedFavourites);
      console.log(`Removed ${data.id} from favourites: ${updatedFavourites}`);
    } else {
      setFavourite([...favourite, data.id])
      console.log(`Added ${data.id} to favourites: ${[...favourite, data.id]}`);
    }
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
