import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data, onLoadTopic } = props;
  return (
    <div className="topic-list__item">
      <span onClick={() => onLoadTopic(data)}>{data.title}</span>
    </div>
  );
};

export default TopicListItem;