import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { addFavourite } = props;
  const [fave, setFave] = useState("notFave");
  const handleClick = () => {
    setFave(fave === "favourite" ? "notFave" : "favourite");
    addFavourite();
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
          <FavIcon selected={fave === "favourite"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;