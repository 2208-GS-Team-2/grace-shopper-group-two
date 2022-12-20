import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../store/userSlice";
import { resetQuantity, resetCart } from "../store/cartSlices/cartSlice";

import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
    dispatch(resetQuantity());
    dispatch(resetCart());
    console.log("log out");
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => logout()}>Sing Out</button>
    </div>
  );
};

export default Logout;
