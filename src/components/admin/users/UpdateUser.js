import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpdatedSingleUser } from "../../../store/userSlice";

const UpdateUser = ({ singleUser, setFormIsShown }) => {
  //Custom Hooks:
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //States:
  const [username, setUserName] = useState(singleUser.username);
  const [email, setEmail] = useState(singleUser.email);
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
      const response = await axios.put(
        `/api/users/${singleUser.id}`,
        updateUserInfo
      );
    } catch (err) {
      console.log(`there is ${err} updating the data`);
    }
    dispatch(setUpdatedSingleUser(updateUserInfo));
    const allUsers = await axios.get("/api/users");
    setFormIsShown(false);
    navigate("/allUsers");
  };

  const renderForm = (
    <form onSubmit={handleSumbitForm}>
      <h2>Change User Fields</h2>
      <div>
        <label htmlFor="username">Name: </label>
        <input
          type="text"
          value={username}
          onChange={updateUserNameHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={email}
          onChange={updateEmailHandler}
        />
      </div>
  {/* Change this to a boolean type field.
      Site crashes if typing anything else
      other than True, Yes, False, and No.
  */}
      <div>
        <label htmlFor="isAdmin">Admin: </label>
        <input
          type="text"
          value={isAdmin}
          onChange={updateIsAdminHandler}
        />
      </div>
      <div
        style={{
          display: "flex",
          padding: "5px",
        }}
      >
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button variant="contained"
          //   onClick={cancelUpdatedForm}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
  return <>{renderForm}</>;
};

export default UpdateUser;
