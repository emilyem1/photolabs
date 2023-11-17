import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
  {
    id: "4",
    slug: "topic-4",
    title: "Animals",
  },
  {
    id: "5",
    slug: "topic-5",
    title: "Fashion",
  },
];

const TopicList = () => {
  const topic = sampleDataForTopicList.map((details) => {
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