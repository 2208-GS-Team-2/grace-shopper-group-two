import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/cartSlice";
import "./cartStyle.css";
const Cart = () => {
  //Selectors
  const { cart } = useSelector((state) => state.cart);

  console.log(cart);
  console.log("cartId", cart[0].id);
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

  const deleteProductHandler = async (productId) => {
    //1. need to grab the cart id
    //2.need to grab the productid.
    //3.check if the cart has the product with this id.
    //4. if so, delete the product and return to cart.
    //5. the productId is not present, say product not found and return to cart.

    console.log(productId);
    const cartId = cart[0].id;
    console.log(cartId);
    try {
      if (cartId) {
        const fetchProductToDelete = await axios.delete(
          `/api/carts/usercart/${productId}`
        );
        console.log(fetchProductToDelete);
      }
    } catch (err) {
      console.log(err);
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
            <button onClick={() => deleteProductHandler(product.id)}>
              Remove{" "}
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
