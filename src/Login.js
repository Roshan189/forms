import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [user, SetUser] = useState({
    email: "",
    password: "",
  });

  const handleEvents = (e) => {
    const { name, value } = e.target;

    SetUser({ ...user, [name]: value });
  };

  return (
    <>
      <Form>
        <div className={"form-group m-3"} controlid="formBasicEmail">
          <label className={"form-label"}>Email address</label>
          <input
            className={"form-control"}
            type="email"
            name="email"
            value={user.email}
            onChange={handleEvents}
            placeholder="Enter email"
          />
          <small className={"text-muted form-text"}>
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className={"form-group m-3"} controlid="formBasicPassword">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={user.password}
            onChange={handleEvents}
            placeholder="Password"
          />
        </div>
        <div className={"form-group m-3"} controlid="formBasicCheckbox">
          <input type="checkbox" label="Keep login" />
          Keep Login
        </div>
        <Button className={"primary m-3"} type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
