import React from 'react';

import '../styles/HomeRoute.scss';
import { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos, toggleModal, setSelectedPhoto } = props;
  const [favourite, setFavourite] = useState([]);
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favourite.length > 0}/>
      <PhotoList 
        photos={photos}
        favourite={favourite}
        setFavourite={setFavourite}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;