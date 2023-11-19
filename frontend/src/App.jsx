import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  const [favourite, setFavourite] = useState([]);
  const addFavourite = (data) => {
    const isExisting = favourite.includes(data.id);
    if (isExisting) {
      // If data.id exists, remove it from the array
      const updatedFavourites = favourite.filter((id) => id !== data.id);
      setFavourite(updatedFavourites);
      console.log(`Removed ${data.id} from favourites: ${updatedFavourites}`);
    } else {
      setFavourite([...favourite, data.id])
      console.log(`Added ${data.id} to favourites: ${[...favourite, data.id]}`);
    }
  }
  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        toggleModal={toggleModal} 
        setSelectedPhoto={setSelectedPhoto}
        favourite={favourite}
        addFavourite={addFavourite} 
      />
      {showModal && <PhotoDetailsModal 
        toggleModal={toggleModal} 
        selectedPhoto={selectedPhoto}
        addFavourite={addFavourite}
      />} {/* If showModal is true, display modal */}
    </div>
  );
};

export default App;
