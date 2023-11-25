import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { state, onPhotoSelect, onLoadTopic, updateToFavPhotoIds, photos, topics, favourite } = props;
  return (
    <div className="home-route">
      <TopNavigationBar
        onLoadTopic={onLoadTopic}
        topics={topics}
        isFavPhotoExist={state.favourite.length > 0}
      />
      <PhotoList
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        photos={photos}
        favourite={favourite}
      />
    </div>
  );
};

export default HomeRoute;