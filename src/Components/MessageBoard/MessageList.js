import React, { useState } from "react";
import MessageListItem from "./MessageListItem";
const MessageList = ({ messages, authorId, authorName }) => {
  const [editFlagId, setEditFlagId] = useState(null);

  let editFlagChange = (id, flag) => {
    if (flag === "EDIT") {
      setEditFlagId(id);
    } else {
      setEditFlagId(null);
    }
  };

  let parent = messages.filter((p) => p.parentId === null);
  let options = parent.map((messageItem, index) => (
    <MessageListItem
      id={messageItem.id}
      key={index}
      messageItem={messageItem}
      editFlagChange={editFlagChange}
      editing={editFlagId === messageItem.id}
      authorId={authorId}
      authorName={authorName}
      messages={messages}
      editFlagId={editFlagId}
    />
  ));

  return <div>{options}</div>;
};

export default MessageList;
