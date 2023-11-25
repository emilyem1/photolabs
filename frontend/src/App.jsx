import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    onPhotoSelect,
    onLoadTopic,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds
  } = useApplicationData();

  const { topicData, photoData, favourite, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        state={state}
        topics={topicData}
        photos={photoData}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favourite={favourite}
      />
      {state.showModal && <PhotoDetailsModal
        data={state}
        photos={photoData}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        favourite={favourite}
        selectedPhoto={selectedPhoto}
      />} {/* If showModal is true, display modal */}
    </div>
  );
};

export default App;