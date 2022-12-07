import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ display: 'flex' }}>
      <img style={{ width: '20%' }} src={product.img} alt="productImage" />
      <div>
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
        <h3>{product.origin}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
