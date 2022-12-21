import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { setUpdatedSingleUser } from "../../../store/userSlice";

const UpdateUser = ({ singleUser, setFormIsShown }) => {
  //Custom Hooks:
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //States:
  const [username, setUserName] = useState(singleUser.username);
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(singleUser.isAdmin);
  //Handler functions
  const updateUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const updateEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const updateIsAdminHandler = (event) => {
    setIsAdmin(event.target.value);
  };

  const handleSumbitForm = async (event) => {
    event.preventDefault();
    const updateUserInfo = { username, email, isAdmin };
    try {
      await axios.put(`/api/users/${singleUser.id}`, updateUserInfo);
    } catch (err) {
      console.log(`there is ${err} updating the data`);
    }
    dispatch(setUpdatedSingleUser(updateUserInfo.data));
    await axios.get("/api/users");
    setFormIsShown(false);
    navigate("/allUsers");
  };

  const renderForm = (
    <div>
      <form onSubmit={handleSumbitForm}>
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
        >
          <Typography className="update-user-title">
            Change User Fields
          </Typography>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="username"
            name="username"
            value={username}
            onChange={updateUserNameHandler}
          ></TextField>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="email"
            name="email"
            value={email}
            onChange={updateEmailHandler}
          ></TextField>

          <Typography htmlFor="isAdmin">Admin: </Typography>
          <select value={isAdmin} id="isAdmin" onChange={updateIsAdminHandler}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>

          <Button
            type="submit"
            sx={{ marginTop: 5, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            submit
          </Button>
          <Button onClick={() => navigate("/allusers")}>Cancel</Button>
        </Box>
      </form>
    </div>
  );
  return <>{renderForm}</>;
};

export default UpdateUser;
