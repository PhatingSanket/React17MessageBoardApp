import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
const CreateMessageForm = ({
  inputMessage,
  handleSubmit,
  onhandleChanged,
  authorId,
}) => {
  return authorId &&
    authorId !== undefined &&
    authorId !== null &&
    authorId !== "" ? (
    <form className="ui reply form" onSubmit={handleSubmit}>
      <div className="fields">
        <div className="field">
          <div className="ui input">
            <input
              className="field"
              type="text"
              name="message"
              placeholder="Write something..."
              value={inputMessage}
              onChange={onhandleChanged}
              required
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  ) : (
    <div className="Shift-down">
      <p>
        Please{" "}
        <Router>
          <Link to="/Login">Login</Link>
        </Router>{" "}
        to create a new message thread
      </p>
    </div>
  );
};

export default CreateMessageForm;
