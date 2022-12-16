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
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={updateUserNameHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={updateEmailHandler}
        />
      </div>
      <div>
        <label htmlFor="isAdmin">isAdmin</label>
        <input
          id="isAdmin"
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
        <input
          type="submit"
          style={{
            marginLeft: "5px",
            margin: "5px",
            padding: "5p",
            backgroundColor: "dodgerblue",
          }}
        />
        <button
          style={{ background: "lightgray", color: "black" }}
          //   onClick={cancelUpdatedForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
  return <>{renderForm}</>;
};

export default UpdateUser;
