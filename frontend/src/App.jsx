import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    onLoadTopic,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds
  } = useApplicationData();

  const { photos } = state;

  return (
    <div className="App">
      <HomeRoute 
        state={state}
        photos={photos}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      {state.showModal && <PhotoDetailsModal 
        state={state}
        photos={photos}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />} {/* If showModal is true, display modal */}
    </div>
  );
};

export default App;
