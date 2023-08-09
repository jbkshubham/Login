import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const hist = useNavigate();

  function Handler(e) {
    e.preventDefault();
    let data = { username, password };
    console.log(data);

    fetch("http://localhost:8081/api/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("true",true)
          hist("/");
        } else {
          console.log("user not found");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="centered-container">
      <h1>LogIn</h1>
      <form onSubmit={Handler}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
          value={username}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          value={password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Log;
