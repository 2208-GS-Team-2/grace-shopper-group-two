import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setHasError } from "../../store/productSlice.js";
import ProductCard from "./ProductCard.js";
import {
  setSingleProduct,
  setLoadingProduct,
  setDeleteProduct,
} from "../../store/productSlice.js";
import CreateNewProduct from "./CreateNewProduct.js";
import { useState } from "react";
import "./productsStyle.css";
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
    return <CreateNewProduct key={products} products={products} user={user} />;
  }
  return (
    <div className="container products">
      <div className="header-content">
        <div className="create-product-button">
          {user.isAdmin && (
            <Tooltip title={<h3>Only admin can add a new product.</h3>}>
              <Button onClick={() => setFormIsShown(true)}>
                Add a new product
              </Button>
            </Tooltip>
          )}
        </div>
        <h3 className="our-products-title">Our Products</h3>
        <div className="product-content">
          {products.length &&
            products?.map((product) => {
              return (
                <ProductCard
                  user={user}
                  key={product.id}
                  product={product}
                  fetchSingleProduct={fetchSingleProduct}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
