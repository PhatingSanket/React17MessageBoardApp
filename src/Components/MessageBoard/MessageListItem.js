import React, { useState } from "react";
import { v4 as uniqueId } from "uuid";
import { deleteMessage, updateMessage, saveMessage } from "../Api";

import ReplyListItem from "./ReplyListItem";
const MessageListItem = ({
  id,
  messageItem,
  editFlagChange,
  editing,
  authorId,
  authorName,
  messages,
  editFlagId,
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const [inputReply, setInputReply] = useState("");
  const [replyPost, setReplyPost] = useState(false);
  const [reply, setReply] = useState(false);
  const [toggleReply, setToggleReply] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  const handleInputChanged = (e) => {
    setInputMessage(e.target.value);
  };

  const handleInputReplyChanged = (e) => {
    setInputReply(e.target.value);
  };

  const handleEdit = (id) => {
    setToggleEdit(true);
    editFlagChange(id, "EDIT");
  };

  const handleDelete = (id) => {
    editFlagChange("", "CANCEL");
    deleteMessage(id).then((data) => data);
  };

  const handleCancel = (id) => {
    setToggleEdit(false);
  };

  const handleReply = (id) => {
    setToggleReply(true);
    setReply(true);
    setReplyPost(false);
  };

  const handleReplyCancel = () => {
    setToggleReply(false);
  };

  const handlSave = (item) => {
    if (inputMessage === "") {
      alert("Message text is mandatory!");
      return;
    }

    let messageInfo = {
      id: item.id,
      message: inputMessage,
      parentId: null,
      authorName: authorName,
      author: authorId,
      date: currentDate,
    };
    editFlagChange(id, "CANCEL");
    updateMessage(messageInfo).then((data) => setInputMessage(data.message));
  };

  const handleReplyPost = (e) => {
    e.preventDefault();
    if (inputReply === "") {
      alert("Reply text is mandatory!");
      return;
    }
    let messageInfo = {
      id: uniqueId(),
      message: inputReply,
      parentId: messageItem.id,
      authorName: authorName,
      author: authorId,
      date: currentDate,
    };

    saveMessage(messageInfo).then((data) => data);

    setReplyPost(true);
  };

  let child = messages.filter((c) => c.parentId === id);
  let childItemOptions = child.map((childItem, index) => (
    <ReplyListItem
      id={childItem.id}
      key={index}
      childItem={childItem}
      editFlagChange={editFlagChange}
      editing={editFlagId === childItem.id}
      authorId={authorId}
      authorName={authorName}
      parentId={id}
    />
  ));

  return (
    <div className={`comment`}>
      {editing && toggleEdit ? (
        <div key={id}>
          <div className="content Shift-down">
            <div className="avatar">
              <img src={"avatar.jpg"} alt="avatar" />
            </div>
            <div className="author User Shift-right">
              {messageItem.authorName}
              <div className="metadata">{messageItem.date}</div>
            </div>
            <div className="fields Edit-input">
              <div className="field">
                <div className="ui input">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChanged}
                    placeholder={messageItem.message}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="actions Shift-right">
              <a href="/#" onClick={() => handlSave(messageItem)}>
                Save
              </a>
              <a href="/#" onClick={() => handleCancel(id)}>
                Cancel
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div key={id}>
          <div className="content Shift-down">
            <div className="avatar">
              <img src={"avatar.jpg"} alt="avatar" />
            </div>
            <div className="author User Shift-right">
              {messageItem.authorName}
              <div className="metadata">{messageItem.date}</div>
            </div>
            <div className="text Shift-right">
              {inputMessage || messageItem.message}
            </div>
            <div className="actions Shift-right">
              {authorId && authorId !== "" && (
                <a href="/#" onClick={() => handleReply(id)}>
                  Reply
                </a>
              )}
              {authorId && authorId !== "" && authorId === messageItem.author && (
                <>
                  <a href="/#" onClick={() => handleEdit(id)}>
                    Edit
                  </a>
                  <a href="/#" onClick={() => handleDelete(id)}>
                    Delete
                  </a>
                </>
              )}
            </div>
            {reply && toggleReply && (
              <form className="ui reply form Shift-right">
                {!replyPost && (
                  <div className="fields Reply-input">
                    <div className="field">
                      <div className="ui input">
                        <input
                          className="field"
                          type="text"
                          name="reply"
                          placeholder="Reply to message thread"
                          value={inputReply}
                          onChange={handleInputReplyChanged}
                          required
                        ></input>
                      </div>
                      <div className="actions Shift-top">
                        <a href="/#" onClick={handleReplyPost}>
                          Post
                        </a>
                        <a href="/#" onClick={() => handleReplyCancel(id)}>
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}
      <div>{childItemOptions}</div>
    </div>
  );
};

export default MessageListItem;
