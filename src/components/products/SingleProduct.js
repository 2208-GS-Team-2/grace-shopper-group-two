import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoadingProduct, setSingleProduct } from '../../store/productSlice';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.product);
  // console.log(object);

//!
const fetchSingleProduct = async () => {
  try {
    dispatch(setLoadingProduct(true));
    const response = await axios.get(`/api/products/${id}`);

    dispatch(setSingleProduct(response.data));
    dispatch(setLoadingProduct(false));
  } catch (err) {
    dispatch(setLoadingProduct(false));
    // next(err);
  }
};

useEffect(() => {
  fetchSingleProduct(id);
}, []);


  //!
  if (!Object.keys(singleProduct).length) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div>
        <p>Herro World.</p>

      </div>
    </div>
  )
  // const renderProductData =
  // return (
  //   <div>
  //     <div
  //       style={{ display: 'flex', justifyContent: 'center', margin: '150px' }}
  //     >
  //       <Card sx={{ maxWidth: 800 }} style={{ display: 'flex' }}>
  //         <CardContent style={{ padding: '5px;' }}>
  //           <Typography variant="h3">{selectedCampus.name}</Typography>
  //           <Typography variant="body2" color="text.secondary">
  //             location: {selectedCampus.address}
  //           </Typography>
  //           <Typography variant="h6">{selectedCampus.description}</Typography>
  //         </CardContent>
  //       </Card>
  //       <div></div>
  //     </div>
  //   </div>
  // );
  // return <div>renderProductData</div>;
};

export default SingleProduct;
