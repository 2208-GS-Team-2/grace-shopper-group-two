import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/cartSlice";

const Cart = () => {
  //Selectors
  const { cart } = useSelector((state) => state.cart);


  console.log("cart", cart);
  const renderCartData =
    cart.length &&
    cart.map((cartItem) => {
      return (
        <>
          <p>Item in the cart:{cartItem.cartQuantity}</p>
          <p>TotalPrice:{cartItem.totalPrice}</p>
        </>
      );
    });

  // const mapOverProducts =
  //   cart.length &&
  //   cart.map((product) => {
  //     return product.products;
  //   });

  const displayProducts = cart[0]["products"].map((product) => {
    return (
      <div key={product.id} style={{ display: "flex", padding: "5px" }}>
        <img
          src={`/${product.img}`}
          alt={"image"}
          style={{ width: "50px", height: "auto", borderRadius: "50%" }}
        />
        <h5 style={{ padding: "5px" }}>{product.name}</h5>
        <h5 style={{ padding: "5px" }}>Price:{product.price}</h5>
        {/* <h5 style={{ padding: "5px" }}>Quantity:{product.quantity}</h5> */}
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
