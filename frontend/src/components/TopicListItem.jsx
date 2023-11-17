import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data } = props;
  return (
    <div className="topic-list__item">
      <span>{data.title}</span>
    </div>
  );
};

export default TopicListItem;
