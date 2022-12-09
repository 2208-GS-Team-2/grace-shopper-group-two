import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUserPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/users", {
      username,
      password,
      email,
    });
    //!add try catch later
    navigate("/login");
  };

  return (
    <div>
      <h3>Create your account:</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "3px" }}
      >
        <label>Username:</label>
        <input type={"text"} value={username} onChange={handleUsernameChange} />
        <label>Password:</label>
        <input type={"text"} value={password} onChange={handlePasswordChange} />
        <label>Email:</label>
        <input type={"email"} value={email} onChange={handleEmailChange} />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default CreateUserPage;
