import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../store/userSlice";
import CreateUserPage from "./CreateUser";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user.id);
  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <p>Welcome {user.username}!!</p>
        {/* <p>{user.cart}</p> */}

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
