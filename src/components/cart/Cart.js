import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  //Customs Hooks:
  const dispatch = useDispatch();
  //states:
  //Selectors:
  const selectedCart = useSelector((state) => state.cart.selectedCart);
  const user = useSelector((state) => state.user.user);
  console.log("selectedCart ", selectedCart);
  console.log("user", user.username);
  console.log("user", user.isAdmin);
  //Fetch selected cart:

  const fetchSelectedCart = () => {};

  return (
    <>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon fontSize={"large"} />
      </Badge>
    </>
  );
};

export default Cart;
