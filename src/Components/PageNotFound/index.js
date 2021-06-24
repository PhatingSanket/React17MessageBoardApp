import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="ui left aligned placeholder segment">
      <h3 className="ui header">
        Sorry the page you're looking for can't be found!
      </h3>
      <p>
        <Router basename={process.env.PUBLIC_URL}>
          <Link to="/">Home</Link>
        </Router>
      </p>
    </div>
  );
};

export default PageNotFound;
