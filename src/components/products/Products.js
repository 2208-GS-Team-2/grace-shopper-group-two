import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/productSlice.js';
import ProductCard from './ProductCard.js';
const Products = () => {
  //CUSTOM HOOKS:
  const dispatch = useDispatch();

  //Selectors to grab redux state from the store
  const products = useSelector((state) => state.product.products);

  //Fetch the products data from the server
  const fetchProducts = async () => {
    try {
      const fetchedProducts = await axios.get('/api/products');
      console.log(fetchedProducts);
      dispatch(setProducts(fetchedProducts.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(fetchProducts());
    fetchProducts();
  }, []);
  return (
    <>
      <h1>All Products</h1>
      <div>
        {products.map((product) => {
          return (
            <>
              <ProductCard product={product} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
