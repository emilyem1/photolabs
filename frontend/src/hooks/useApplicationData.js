import { useState } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: photos,
    topics: topics,
    selectedPhoto: null,
    showModal: false,
    favourite: []
  });

  // Function used to open modal
  const onPhotoSelect = (photo) => {
    setState((currentState) => ({
      ...currentState, /* Takes the current state of selectedPhoto: null and showModal: false when clicking on a photo and replaces them with: */
      selectedPhoto: photo,
      showModal: true
    }));
  };

  // Function used to add favourite photo
  const updateToFavPhotoIds = (photoId) => {
    // logic here
  };

  // Function used to load topics on nav
  const onLoadTopic = (topics) => {
    setState((currentState) => ({
      ...currentState,
      topics: topics
    }));
  };


  // Function used to close the modal
  const onClosePhotoDetailsModal = () => {
    setState((currentState) => ({
      ...currentState,
      selectedPhoto: null,
      showModal: false
    }));
  };
  
  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;