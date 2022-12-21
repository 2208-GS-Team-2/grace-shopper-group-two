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
    console.log("user is logged out");
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default Logout;
