import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { updateToFavPhotoIds, data } = props;
  const [fave, setFave] = useState(false);
  const handleClick = () => {
    setFave(fave === true ? false : true);
    updateToFavPhotoIds(data);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
          <FavIcon selected={fave === true}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;