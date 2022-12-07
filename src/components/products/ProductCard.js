import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <Grid container spacing={2} style={{ display: 'flex' }}>
      <Grid item md={3}>
        <Box component="img" sx={{ width: '100%' }} src={product.img} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          {product.description}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ff6d00' }}>
          {'$' + product.price}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'gray' }}>
          {'free shipping'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
