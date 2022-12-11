import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoadingProduct, setSingleProduct } from "../../store/productSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { singleProduct } = useSelector((state) => state.product);
  // console.log(object);

  const [cart, setCart] = useState("");

  //!
  const fetchSingleProduct = async () => {
    try {
      dispatch(setLoadingProduct(true));
      const response = await axios.get(`/api/products/${id}`);

      dispatch(setSingleProduct(response.data));
      dispatch(setLoadingProduct(false));
    } catch (err) {
      dispatch(setLoadingProduct(false));
      next(err);
    }
  };

  const fetchUserCart = async () => {
    console.log("in fetch cart 1");
    if (user) {
      console.log(user.id);
    }

    // const userInfo = await axios.get(`/api/users/${id}`);
    // console.log(userInfo);
    // const userCartId = userInfo.cartId;
    // setCart(userCartId);

    console.log("in fetch cart 2");
  };

  const handleAddToCart = async (productId) => {
    const cartId = cart;

    await axios.put(`/api/carts/${cartId}`, {
      productId,
    });
  };

  useEffect(() => {
    fetchSingleProduct(id);

    fetchUserCart();
  }, []);

  if (!Object.keys(singleProduct).length || !user) {
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div>
        <img
          src={`/${singleProduct.img}`}
          alt={`${singleProduct.name}`}
          style={{ width: "500px", height: "auto" }}
        />
        <h2>{singleProduct.name}</h2>
        <h2>{`${(singleProduct.price / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}</h2>
        {console.log("this is user console ", user.id)}

        <button onClick={() => handleAddToCart(singleProduct.id)}>
          add to cart
        </button>
        <h3>{singleProduct.description}</h3>
      </div>
    </div>
  );
};

export default SingleProduct;
