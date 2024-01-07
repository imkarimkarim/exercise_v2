import React, { useState } from "react";
import { AuthContext } from "../context/auth-context";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser } = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8989/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setErrorMessage("");
        setUser(data.user);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="account-form">
      <h2>Login to App</h2>
      <div className="error-message" data-testid="error-message">
        {errorMessage}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-testid="login-btn">
          Log in
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Sign up for an account
      </button>
    </div>
  );
};

export default Login;
