import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setHasError } from '../../store/productSlice.js';
import ProductCard from './ProductCard.js';
import { setSingleProduct, setLoadingProduct } from '../../store/productSlice';

import './productStyle.css';
import { useNavigate, Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Products = () => {
  //CUSTOM HOOKS:
  const dispatch = useDispatch();

  //Selectors to grab redux state from the store
  const { products, hasError } = useSelector((state) => state.product);

  //Fetch tall products data
  const fetchProducts = async () => {
    try {
      const fetchedProducts = await axios.get('/api/products');
      console.log(fetchedProducts);
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
  return (
    <>
      <h1 className={'title'}>All Products</h1>
      <div>
        {products.map((product) => {
          return (
            <>
              <ProductCard
                product={product}
                fetchSingleProduct={fetchSingleProduct}
                />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
