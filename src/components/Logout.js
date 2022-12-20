import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../store/userSlice";


const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
    navigate('/');
  };

  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
