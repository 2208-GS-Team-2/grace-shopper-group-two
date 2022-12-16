
import { Button, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setLoadingProduct, setSingleProduct, setDeleteProduct } from "../../store/productSlice";
import UpdateProduct from "./UpdateProduct";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { singleProduct } = useSelector((state) => state.product);

  const [cart, setCart] = useState("");
  const [formIsShown, setFormIsShown] = useState(false);

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

  //Delete a single product
  const deleteProductHandler = async (id) => {
    try {
      dispatch(setDeleteProduct(id));
      const { data, deleted } = await axios.delete(`/api/products/${id}`, {});
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  // update a single product

  const handleAddToCart = async (productId) => {
    const cartId = cart;

    await axios.put(`/api/carts/${cartId}`, {
      productId,
    });
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  if (!Object.keys(singleProduct).length || !user) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (formIsShown) {
    return (
      <>
        <UpdateProduct
          singleProduct={singleProduct}
          setFormIsShown={setFormIsShown}
        />
      </>
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
        <Link>
          <button onClick={() => handleAddToCart(singleProduct.id)}>
            add to cart
          </button>
        </Link>
        <h3>{singleProduct.description}</h3>
        <div>
          {user.isAdmin && (
            <Button onClick={() => deleteProductHandler(singleProduct.id)}>
              Delete
            </Button>
          )}
          {user.isAdmin && (
            <Button onClick={() => setFormIsShown(true)}>Edit</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
