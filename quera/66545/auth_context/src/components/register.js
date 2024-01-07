import React, { useState } from "react";
import { AuthContext } from "../context/auth-context";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser } = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8989/api/register", {
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
      <h2>Sign up</h2>
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
        <button type="submit" data-testid="register-btn">
          Register
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Already have an account? Log In
      </button>
    </div>
  );
};

export default Register;
