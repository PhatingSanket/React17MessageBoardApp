import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Messages from "./Components/MessageBoard";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import PageNotFound from "./Components/PageNotFound";
import "./App.css";

function App() {
  const [_userInfo, _setUserInfo] = useState(null);
  const [_logOut, _setLogOut] = useState(false);

  const loginHandler = (userInfo) => {
    _setUserInfo(userInfo);
    _setLogOut(false);
  };

  const logOutHandler = (logOut) => {
    _setLogOut(logOut);
  };

  return (
    <div className="App">
      <Header userInfo={_userInfo} logOut={_logOut} />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Messages}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/About"}
            component={About}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/Contact"}
            component={Contact}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/Login"}
            render={(props) => <Login {...props} loginHandler={loginHandler} />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/Register"}
            component={Register}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/Logout"}
            render={(props) => (
              <Logout {...props} logOutHandler={logOutHandler} />
            )}
          />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
