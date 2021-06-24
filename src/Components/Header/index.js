import React, { useState, useEffect } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
const Header = ({ userInfo, logOut }) => {
  const [authorName, setAuthorName] = useState(null);

  const [_logOut, _setLogOut] = useState(false);

  useEffect(() => {
    _setLogOut(logOut);
  }, [logOut]);

  useEffect(() => {
    if (
      userInfo &&
      userInfo !== null &&
      userInfo.length > 0 &&
      userInfo[0].name !== ""
    ) {
      setAuthorName(userInfo[0].name);
    } else {
      let retrivedAuthorName = JSON.parse(localStorage.getItem("authorName"));
      if (retrivedAuthorName !== "") {
        setAuthorName(retrivedAuthorName);
      }
    }
  }, [userInfo]);

  return (
    <div className="ui block left aligned header Header">
      <div className="">
        <div className="">
          <div className="">
            <h2>Message Board App</h2>
            <Router basename={process.env.PUBLIC_URL}>
              <div className="ui pointing menu">
                <NavLink
                  exact
                  activeClassName="active item"
                  className="item"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active item"
                  className="item"
                  to="/About"
                >
                  About us
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active item"
                  className="item"
                  to="/Contact"
                >
                  Contact us
                </NavLink>
                <div className="right menu">
                  {!_logOut &&
                  authorName &&
                  authorName !== null &&
                  authorName !== "" ? (
                    <>
                      <NavLink
                        activeClassName="active item"
                        className="item"
                        to="/Logout"
                      >
                        Logout
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        activeClassName="active item"
                        className="item"
                        to="/Login"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        activeClassName="active item"
                        className="item"
                        to="/Register"
                      >
                        Register
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </Router>
            {!_logOut &&
            authorName &&
            authorName !== null &&
            authorName !== "" ? (
              <div className="Welcome-msg">
                <h4>Welcome : {authorName}</h4>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
