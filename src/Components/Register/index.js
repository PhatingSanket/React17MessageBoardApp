import React, { useState } from "react";
import { v4 as uniqueId } from "uuid";
import { register } from "../Api";

const Register = (props) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  let userInfo = {
    id: uniqueId(),
    name: values.name,
    email: values.email,
    password: values.password,
    date: currentDate,
  };

  const createUser = (e) => {
    e.preventDefault();
    setUser([
      ...user,
      {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    ]);

    register(userInfo).then((data) =>
      setUser([
        ...user,
        {
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          date: data.date,
        },
      ])
    );
    setSignUpSuccess(true);
  };

  const Login = () => {
    props.history.push("/Login");
  };

  return (
    <div className="ui placeholder segment">
      <div className="ui stackable very relaxed two column grid">
        <div className="column">
          {!signUpSuccess && (
            <form className="ui form" onSubmit={createUser}>
              <div className="field">
                <label>Name</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleInputChange}
                    required
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                  <i aria-hidden="true" className="mail icon"></i>
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
                Sign up
              </button>
            </form>
          )}
          {signUpSuccess && (
            <div>
              <h4>{"Successfully Registered! Click Login to authenticate."}</h4>
              <div className="middle aligned column">
                <button className="ui large button" onClick={Login}>
                  <i aria-hidden="true" className="user icon"></i>Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
