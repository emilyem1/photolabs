import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(null).map(() => ({
    ...sampleDataForPhotoListItem
  }));;
  return (
    <div className="App">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id}
          imageSource={photo.imageSource}
          profile={photo.profile}
          username={photo.username}
          location={photo.location} 
        />
      ))}
    </div>
  );
};

export default App;
