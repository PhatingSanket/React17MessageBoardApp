import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Login = ({ loginHandler }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [userInfo, setUserInfo] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  let history = useHistory();
  let uId = userInfo && userInfo.length > 0 ? userInfo[0].id : "";
  let uName = userInfo && userInfo.length > 0 ? userInfo[0].name : "";

  useEffect(() => {
    localStorage.setItem("authorId", JSON.stringify(uId));
    localStorage.setItem("authorName", JSON.stringify(uName));
  }, [uId, uName]);

  useEffect(() => {
    if (userInfo && userInfo !== null && userInfo.length > 0) {
      loginHandler(userInfo);
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateUser = async (e) => {
    e.preventDefault();
    const apiURL = `http://localhost:5000/login?email=${values.email}&password=${values.password}`;
    const response = await axios.get(apiURL);
    const data = await response.data;

    if (data !== null && data.length > 0) {
      setUserInfo(response.data);
      history.push("/");
    }

    if (data === null || data.length === 0) {
      setUserNotFound(true);
      setValues({ email: "", password: "" });
    }
  };

  return (
    <div className="ui placeholder segment">
      <div className="ui stackable very relaxed two column grid">
        <div className="column">
          <form className="ui form" onSubmit={validateUser}>
            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleInputChange}
                  required
                />
                <i aria-hidden="true" className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleInputChange}
                  required
                />
                <i aria-hidden="true" className="lock icon"></i>
              </div>
            </div>
            <button className="ui primary button" type="submit">
              Login
            </button>
          </form>
          {userNotFound && (
            <div className="Shift-down Warning">
              User not found. Please sign up.
            </div>
          )}
        </div>
        <div className="middle aligned column">
          <Link to="Register">
            <button className="ui large button">
              <i aria-hidden="true" className="signup icon"></i>Sign up
            </button>
          </Link>
        </div>
      </div>
      <div className="ui vertical divider">Or</div>
    </div>
  );
};

export default Login;
