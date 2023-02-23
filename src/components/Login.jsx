import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import CreateUser from "./CreateUser";
import { setUser } from "../store/userSlice";

const Login = () => {
  //Custom Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Local States
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [createAccount, setCreateAccount] = useState(false);
  console.log(createAccount);

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const loginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(response.data));
    }
  };

  const attemptLogin = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/auth", credentials);
    const token = response.data;
    window.localStorage.setItem("token", token);
    loginWithToken(token);
    navigate("/");
  };

  if (createAccount) {
    return (
      <Link to="/createuser">
        <CreateUser />
      </Link>
    );
  }
  return (
    <div>
      <form onSubmit={attemptLogin}>
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
            Login
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
            Login
          </Button>
          <Button
            type="submit"
            sx={{ marginTop: 5, borderRadius: 3 }}
            variant="contained"
            color="success"
            onClick={() => setCreateAccount(!createAccount)}
          >
            Create a new account
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
