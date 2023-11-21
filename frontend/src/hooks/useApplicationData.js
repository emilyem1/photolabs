import { useReducer } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourite: [...state.favourite, action.payload]
      }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourite: state.favourite.filter((id) => id !== action.payload)
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload
      }
    case ACTIONS.SELECT_PHOTO:
      return { 
        ...state,
        selectedPhoto: action.payload,
        showModal: true
      }
    {/* Originally supposed to be DISPLAY_PHOTO_DETAILS next but SELECT_PHOTO handles this logic. So made an action to close modal: */}
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  photos: photos,
  topics: topics,
  selectedPhoto: null,
  showModal: false,
  favourite: []
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Function used to open modal
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  // Function used to add favourite photo
  const updateToFavPhotoIds = (photoId) => {
    dispatch({ 
      type: state.favourite.includes(photoId) 
        ? ACTIONS.FAV_PHOTO_REMOVED 
        : ACTIONS.FAV_PHOTO_ADDED, 
      payload: photoId 
    });
  };

  // Function used to load topics on nav
  const onLoadTopic = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
  };

  // Function used to close the modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
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