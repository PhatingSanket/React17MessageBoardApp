import React, { useState, useEffect } from "react";
import { v4 as uniqueId } from "uuid";
import MessageList from "./MessageList";
import CreateMessageForm from "./CreateMessageForm";
import { fetchMessages, saveMessage } from "../Api";

const Messages = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    fetchMessages().then((data) => setMessages(data));
  }, [messages]);

  useEffect(() => {
    let retrivedAuthorId = JSON.parse(localStorage.getItem("authorId"));
    if (retrivedAuthorId !== "") {
      setAuthorId(retrivedAuthorId);
    }
    let retrivedAuthorName = JSON.parse(localStorage.getItem("authorName"));
    if (retrivedAuthorName !== "") {
      setAuthorName(retrivedAuthorName);
    }
  }, []);

  const onhandleChanged = (e) => {
    setInputMessage(e.target.value);
  };

  let messageInfo = {
    id: uniqueId(),
    message: inputMessage,
    parentId: null,
    authorName: authorName,
    author: authorId,
    date: currentDate,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMessage(messageInfo).then(
      (data) =>
        setMessages([
          ...messages,
          {
            id: data.id,
            message: data.message,
            parentId: data.parentId,
            authorName: data.authorName,
            author: data.author,
            date: data.date,
          },
        ]),
      setInputMessage("")
    );
  };

  return (
    <div className="ui left aligned segment Message-board Comment-scroll">
      <div className="ui comments">
        <h3 className="ui header">Messages</h3>
        <MessageList
          messages={messages}
          authorId={authorId}
          authorName={authorName}
        />
        <CreateMessageForm
          handleSubmit={handleSubmit}
          inputMessage={inputMessage}
          onhandleChanged={onhandleChanged}
          authorId={authorId}
        />
      </div>
    </div>
  );
};

export default Messages;
