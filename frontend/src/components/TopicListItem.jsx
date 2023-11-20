import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data, onLoadTopic } = props;
  const handleClick = () => {
    onLoadTopic(data);
  }
  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{data.title}</span>
    </div>
  );
};

export default TopicListItem;