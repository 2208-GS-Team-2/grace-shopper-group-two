import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import "./cartStyle.css";
import { setCart } from "../../store/cartSlices/cartSlice";

const Cart = ({ quantity }) => {
  //Selectors
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleQtyUpdate = async (thisProduct) => {
    const productId = thisProduct;
    const cartId = cart[0].id;
    const productQuantity = event.target.value;

    await axios.put("/api/cartproducts/update", {
      cartId,
      productId,
      productQuantity,
    });
    const userCart = user.id;
    const newResponse = await axios.post("/api/carts/usercart", { userCart });
    dispatch(setCart(newResponse.data));
  };

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
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <CircularProgress />
      </div>
    );
  }

  const renderCartData =
    // cart.length &&
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
  const shoppingCartData = (
    <div className="wrapper">
      <h2>Shopping Cart</h2>
      <div className="project">
        <div className="shop">
          {cart[0]["products"].map((product) => (
            <div className="box">
              <img src={`/${product.img}`} alt="product-image" />
              <div className="content">
                <h3>{product.name}</h3>
                <h4>
                  Price:{" "}
                  {`${(
                    (product.price * product.CartProduct.productQuantity) /
                    100
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}`}
                </h4>
                <div className="unit">
                  <h4> Quantity:</h4>
                  <form>
                    <input
                      type={"number"}
                      value={product.CartProduct.productQuantity}
                      min="0"
                      max="100"
                      onChange={() => handleQtyUpdate(product.id)}
                    />
                  </form>
                </div>
                <p className="btn-area">
                  <i className="trash"></i>
                  <button
                    onClick={() =>
                      deleteProductFromCart(product.id, cart[0].id)
                    }
                    className="btn2"
                  >
                    Remove
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-bar">
          {cart.map((cartItem) => (
            <div className="right-bar">
              <p>
                <span>Total Price:</span>
                <span>
                  {` ${(cartItem.totalPrice / 100).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}`}
                </span>
              </p>
              <hr />
              <p>
                <span>Total Items:</span>
                <span> {cartItem.cartQuantity}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (!cart[0].products.length) {
    renderCartData;
  }

  return (
    <div className="container">
      <div className="header-content">
      </div>
      {shoppingCartData}
    </div>
  );
};

export default Cart;
