import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { Button } from "@mui/material";
import { resetUser } from "../store/userSlice";
import { resetQuantity, resetCart } from "../store/cartSlices/cartSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
Button
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
      <LogoutTwoToneIcon fontSize={"large"} />
      <Button
        sx={{ textTransform: "none"}}
        onClick={() => logout()}>Logout</Button>
    </div>
  );
};

export default Logout;
