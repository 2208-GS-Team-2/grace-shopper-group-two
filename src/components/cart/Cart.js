import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/cartSlices/cartSlice";

const Cart = () => {
  //Selectors
  const { cart } = useSelector((state) => state.cart);



  const renderCartData =
    cart.length &&
    cart.map((cartItem) => {
      return (
        <>
          <p>Total Number of Items: {cartItem.cartQuantity}</p>
          <p>Total Price: {
          ` ${(cartItem.totalPrice / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}`}</p>
        </>
      );
    });

  // const mapOverProducts =
  //   cart.length &&
  //   cart.map((product) => {
  //     return product.products;
  //   });
  console.log(cart[0].products[0].CartProduct.productQuantity);
  const displayProducts = cart[0]["products"].map((product) => {
    return (
      <div key={product.id} style={{ display: "flex", padding: "5px" }}>
        <img
          src={`/${product.img}`}
          alt={"image"}
          style={{ width: "50px", height: "auto", borderRadius: "50%" }}
        />
        <h5 style={{ padding: "5px" }}>{product.name}</h5>
        <h5 style={{ padding: "5px" }}>{product.CartProduct.productQuantity} Qty.</h5>
        <h5 style={{ padding: "5px" }}>{
          `${((product.price * product.CartProduct.productQuantity) / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}`}</h5>
      </div>
    );
  });

  return (
    <>
      <h1>cart</h1>
      {displayProducts}
      {renderCartData}
    </>
  );
};

export default Cart;
