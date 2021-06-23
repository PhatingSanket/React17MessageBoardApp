import React, { useState } from "react";
import { deleteMessage, updateMessage, saveMessage } from "../Api";
import { v4 as uniqueId } from "uuid";

const ReplyListItem = ({
  id,
  childItem,
  editFlagChange,
  editing,
  authorId,
  authorName,
  parentId,
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const [inputReply, setInputReply] = useState("");
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
      parentId: parentId,
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
      parentId: childItem.id,
      authorName: authorName,
      author: authorId,
      date: currentDate,
    };

    saveMessage(messageInfo).then((data) => data);
  };

  return (
    <div className={`comment Shift-right`}>
      <div>
        {editing && toggleEdit ? (
          <div key={id}>
            <div className="content Shift-down">
              <div className="avatar">
                <img src={"avatar.jpg"} alt="avatar" />
              </div>
              <div className="author User Shift-right">
                {childItem.authorName}
                <div className="metadata">{childItem.date}</div>
              </div>
              <div className="fields Edit-input">
                <div className="field">
                  <div className="ui input">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={handleInputChanged}
                      placeholder={childItem.message}
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div className="actions Shift-right">
                <a href="/#" onClick={() => handlSave(childItem)}>
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
                {childItem.authorName}
                <div className="metadata">{childItem.date}</div>
              </div>
              <div className="text Shift-right">
                {inputMessage || childItem.message}
              </div>
              <div className="actions Shift-right">
                {authorId !== "" && authorId === childItem.author && (
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
              {toggleReply && (
                <form className="ui reply form Shift-right">
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
                    </div>
                    <div className="field">
                      <button className="ui button" onClick={handleReplyPost}>
                        Post
                      </button>
                    </div>
                    <div className="field">
                      <button
                        className="ui button"
                        onClick={() => handleReplyCancel(id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplyListItem;
