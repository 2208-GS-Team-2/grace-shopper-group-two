// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { setCart } from "../../store/cartSlices/cartSlice";


// const AddtoCartButtons = () => {
//   const { cart } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { singleProduct } = useSelector((state) => state.product);

//   const dispatch = useDispatch();

//   //Delete a single product
//   const deleteProductHandler = async (id) => {
//     try {
//       dispatch(setDeleteProduct(id));
//       const { data, deleted } = await axios.delete(`/api/products/${id}`, {});
//       navigate("/products");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // update a single product
//   const handleAddToCart = async (productId) => {
//     try{
//       const cartId = cart[0].id;
//       await axios.put(`/api/carts/${cartId}`, {
//         productId,
//       });
//       const userCart = user.id;

//       const newResponse = await axios.post("/api/carts/usercart", { userCart });
//       dispatch(setCart(newResponse.data));
//     }catch(err){
//       console.log(err);
//     }
//   };

// //when done delete line 98-106
//   return (
//     <div>
//         <Button variant="contained" onClick={() => handleAddToCart(singleProduct.id)}>
//         add to cart
//       </Button>
//       {/* <form>
//           <label>Qty:</label>
//           <input
//             type={"number"}
//             value={1}
//             min="1"
//             max="100"
//             onChange={handleQty}
//           />
//         </form> */}
//     </div>
//   )
// }

// export default AddtoCartButtons;