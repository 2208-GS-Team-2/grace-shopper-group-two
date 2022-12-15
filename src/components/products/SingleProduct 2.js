import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoadingProduct, setSingleProduct } from "../../store/productSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.product);

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

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

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
        <button>add to cart</button>
        <h3>{singleProduct.description}</h3>

      </div>
    </div>
  );
};

export default SingleProduct;