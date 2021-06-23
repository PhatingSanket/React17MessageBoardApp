import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="ui left aligned placeholder segment">
      <h3 className="ui header">
        Sorry the page you're looking for can't be found!
      </h3>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
