import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from 'components/FavBadge';


const TopNavigation = (props) => {
  const { state, onLoadTopic, isFavPhotoExist } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList state={state} onLoadTopic={onLoadTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;