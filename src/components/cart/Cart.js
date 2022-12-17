import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/cartSlice";
import "./cartStyle.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  //custom hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Selectors
  const { cart } = useSelector((state) => state.cart);

  // const renderCartData =
  //   cart.length &&
  //   cart.map((cartItem) => {
  //     return (
  //       <>
  //         <p>Item in the cart:{cartItem.cartQuantity}</p>
  //         <p>TotalPrice:{cartItem.totalPrice}</p>
  //       </>
  //     );
  //   });

  const deleteProductFromCart = async (productId, cartId) => {
    try {
      await axios.put(`/api/cartproducts`, {
        productId,
        cartId,
      });
    } catch (err) {
      console.log(`nothing to delete`);
    }
  };

  const displayProducts =
    cart &&
    cart[0]["products"].map((product) => {
      return (
        <tr key={product.id}>
          <td>
            <img
              style={{ width: "70px" }}
              alt="product"
              src={`/${product.img}`}
            />
          </td>
          <td>{product.quantity} EA</td>
          <td>$ {product.price} </td>
          <td>
            <button
              onClick={() => deleteProductFromCart(product.id, cart[0].id)}
            >
              Remove
            </button>{" "}
          </td>
        </tr>
      );
    });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>My Cart</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{displayProducts}</tbody>
      </table>
    </div>
  );
};

export default Cart;
