import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/cartSlices/cartSlice";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import Navbar from "../mainPage/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./cartStyle.css";
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
        {/* <h5 style={{ padding: "5px" }}>
          {product.CartProduct.productQuantity} Qty.
        </h5> */}
        <h5 style={{ padding: "5px" }}>{`${(
          (product.price * product.CartProduct.productQuantity) /
          100
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}</h5>
        <form>
          <label>Qty:</label>
          <input
            type={"number"}
            value={product.CartProduct.productQuantity}
            min="0"
            max="100"
            onChange={() => handleQtyUpdate(product.id)}
          />
        </form>

        <Button
          variant="contained"
          onClick={() => deleteProductFromCart(product.id, cart[0].id)}
        >
          Remove
        </Button>
      </div>
    );
  });

  const cartDataTable = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Image</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart[0]["products"].map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                  src={`/${product.img}`}
                  alt="product-image"
                />
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => deleteProductFromCart(product.id, cart[0].id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  if (!cart[0].products.length) {
    renderCartData;
  }

  return (
    <div className="container">
      <div className="header-content">
        <Navbar user={user} quantity={quantity} />
      </div>
      {/* {displayProducts} */}
      {renderCartData}
      {cartDataTable}
    </div>
  );
};

export default Cart;
