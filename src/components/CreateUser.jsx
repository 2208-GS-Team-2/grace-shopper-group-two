import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const CreateUserPage = () => {
  //Custom Hooks:
  const navigate = useNavigate();
  //Local States:
  //Local States
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/users", {
      username: credentials.username,
      password: credentials.password,
      email: credentials.email,
    });
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Sign Up
          </Typography>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="username"
            name="username"
            value={credentials.username}
            onChange={onChange}
          ></TextField>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          ></TextField>
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          ></TextField>
          <Button
            type="submit"
            sx={{ marginTop: 5, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateUserPage;
