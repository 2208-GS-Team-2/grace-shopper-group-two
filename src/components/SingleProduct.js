import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  setSingleProduct,
  setLoadingProduct,
} from "../store/singleProductSlice";

const SingleCampusPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, setLoadingProduct } = useSelector(
    (state) => state.singleProduct
  );

  const fetchSingleProduct = async () => {
    dispatch(setLoadingProduct(true));
    const response = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );
    dispatch(setSingleProduct(response.data));
    dispatch(setLoadingProduct(false));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  if (loadingProduct) return <p>Loading...</p>;

  return <div></div>;
};

export default SingleProductPage;
