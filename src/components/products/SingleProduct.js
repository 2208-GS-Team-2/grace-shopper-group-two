import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.product);
  // if (!Object.keys(singleProduct).length) {
  //   return (
  //     <div style={{ textAlign: 'center', paddingTop: '100px' }}>
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  // const renderProductData = (
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
  return <div>"hello"</div>;
};

export default SingleProduct;
