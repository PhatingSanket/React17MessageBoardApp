import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
const Logout = ({ logOutHandler }) => {
  const [logOut, setLogOut] = useState(false);
  useEffect(() => {
    logOutHandler(logOut);
  }, [logOut]);

  const handleLogOut = () => {
    localStorage.clear();
    setLogOut(true);
  };

  return (
    <div className="ui left aligned placeholder segment">
      {logOut && (
        <div>
          <h3 className="ui header">Logout Successfully</h3>
          <p>
            Please go to{" "}
            <Router>
              <Link to="/">Home</Link>
            </Router>{" "}
            page to see the messages.
          </p>
        </div>
      )}
      {!logOut && (
        <button className="ui large button" onClick={handleLogOut}>
          <i aria-hidden="true" className="user circle icon"></i>Logout
        </button>
      )}
    </div>
  );
};

export default Logout;
