import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/cartSlices/cartSlice";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";


const Cart = () => {
  //Selectors
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //!resume building this 👺  🤌🤌 🤌🤌🤌
  // const handleRemoveItemFromCart = async (productId) => {
  //   try{

  //     await axios.delete(``)
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  const deleteProductFromCart = async (productId, cartId) => {

    const fetchUserCart = async () => {
      const userCart = user.id;
      const response = await axios.post("/api/carts/usercart", { userCart });
      dispatch(setCart(response.data));
    };

    try {
      await axios.put(`/api/cartproducts`, { productId, cartId });

      fetchUserCart();

      return console.log("Item has been removed from cart");
    } catch (err) {
      console.log(`nothing to delete`);
    }
  };

  if (!Object.keys(cart).length) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <CircularProgress />
      </div>
    );
  }

  const renderCartData =
    cart.length &&
    cart.map((cartItem) => {
      return (
        <div key={cartItem.id}>
          <p>Total Number of Items: {cartItem.cartQuantity}</p>
          <p>
            Total Price:{" "}
            {` ${(cartItem.totalPrice / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}`}
          </p>
        </div>
      );
    });

  const displayProducts = cart[0]["products"].map((product) => {
    return (
      <div key={product.id} style={{ display: "flex", padding: "5px" }}>
        <img
          src={`/${product.img}`}
          alt={"image"}
          style={{ width: "50px", height: "auto", borderRadius: "50%" }}
        />
        <h5 style={{ padding: "5px" }}>{product.name}</h5>
        <h5 style={{ padding: "5px" }}>
          {product.CartProduct.productQuantity} Qty.
        </h5>
        <h5 style={{ padding: "5px" }}>{`${(
          (product.price * product.CartProduct.productQuantity) /
          100
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}</h5>
        <Button
          variant="contained"
          onClick={() => deleteProductFromCart(product.id, cart[0].id)}
        >
          Remove
        </Button>
      </div>
    );
  });

  if (!cart[0].products.length){renderCartData};

  return (
      <>
      <h2>cart</h2>
      {displayProducts}
      {renderCartData}
    </>
  );

};

export default Cart;
