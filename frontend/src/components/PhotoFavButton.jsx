import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { updateToFavPhotoIds, data, favourite } = props;
  // Check if the favourite array includes the data.id and sets the initial value of fave based on this condition:
  const [fave, setFave] = useState(favourite.includes(data.id));
  // useEffect triggers state update when favourite changes:
  useEffect(() => {
    setFave(favourite.includes(data.id));
  }, [favourite]);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => {updateToFavPhotoIds(data.id)}}>
          <FavIcon selected={fave}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;