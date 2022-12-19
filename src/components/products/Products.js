import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setHasError } from "../../store/productSlice.js";
import ProductCard from "./ProductCard.js";
import {
  setSingleProduct,
  setLoadingProduct,
  setDeleteProduct,
} from "../../store/productSlice";
import "./productStyle.css";
import CreateNewProduct from "./CreateNewProduct";
import { useState } from "react";
import "./productsStyle.css";
import Navbar from "../mainPage/Navbar";
import { Button, Tooltip } from "@mui/material";

const Products = ({ quantity }) => {
  //CUSTOM HOOKS:
  const dispatch = useDispatch();

  //States:
  const [formIsShown, setFormIsShown] = useState(false);

  //Selectors to grab redux state from the store
  const { products, hasError } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  //Fetch all products data
  const fetchProducts = async () => {
    try {
      const fetchedProducts = await axios.get("/api/products");
      // console.log(fetchedProducts);
      dispatch(setProducts(fetchedProducts.data));
    } catch (err) {
      console.log(err);
    }
  };

  //Delete a single product
  const deleteProductHandler = async (id) => {
    dispatch(setDeleteProduct(id));
    const { data, deleted } = await axios.delete(`/api/products/${id}`, {});
    navigate("/products");
  };

  //Fetch a single product data
  const fetchSingleProduct = async (id) => {
    try {
      dispatch(setLoadingProduct(true));
      const response = await axios.get(`/api/products/${id}`);
      dispatch(setSingleProduct(response.data));
      dispatch(setLoadingProduct(false));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  if (hasError) {
    return <p>There is some issue fetching the data from the server</p>;
  }
  // if (!Object.keys(products).length)
  //   return (
  //     <div style={{ textAlign: 'center', paddingTop: '100px' }}>
  //       <CircularProgress />
  //     </div>
  //   );

  useEffect(() => {
    fetchProducts();
  }, []);

  if (formIsShown) {
    return <CreateNewProduct key={products} products={products} />;
  }
  return (
    <div className="container products">
      <div className="header-content">
        <Navbar user={user} quantity={quantity} />
        <div className="create-product-button">
          {user.isAdmin && (
            <Tooltip title="Only admin can add a new product." arrow>
              <Button onClick={() => setFormIsShown(true)}>
                Add a new product
              </Button>
            </Tooltip>
          )}
        </div>
        <div className="product-content">
          {products.length &&
            products?.map((product) => {
              return (
                // <div key={product.id}>
                <ProductCard
                  key={product.id}
                  product={product}
                  fetchSingleProduct={fetchSingleProduct}
                />
                // </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
