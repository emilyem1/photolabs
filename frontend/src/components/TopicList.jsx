import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;
  const topic = topics.map((details) => {
    return <TopicListItem
      key={details.id}
      data={details}
    />;
  });
  return (
    <div className="top-nav-bar__topic-list">
      {topic}
    </div>
  );
};

export default TopicList;