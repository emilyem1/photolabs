import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fave, setFave] = useState("notFave");
  const favourite = () => {
    setFave(fave === "favourite" ? "notFave" : "favourite");
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={favourite}>
          <FavIcon selected={fave === "favourite"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;