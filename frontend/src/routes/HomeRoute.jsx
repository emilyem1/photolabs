import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos, toggleModal, setSelectedPhoto, favourite, addFavourite } = props;
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favourite.length > 0}/>
      <PhotoList 
        photos={photos}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        addFavourite={addFavourite} 
      />
    </div>
  );
};

export default HomeRoute;