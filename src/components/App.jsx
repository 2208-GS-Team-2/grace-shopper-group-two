// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Products from "./products/Products";
// import AllUsers from "./admin/users/AllUsers";
// import SingleUser from "./admin/users/SingleUser";
// import SingleProduct from "./products/SingleProduct";
// import CreateUserPage from "./CreateUser";
// import Cart from "./cart/Cart";
// import { setUser } from "../store/userSlice";
// import { setCart, setQuantity } from "../store/cartSlices/cartSlice";
// import MainPage from "./mainPage/MainPage";
// import Login from "./Login";
// import Logout from "./Logout";
// import Navbar from "./mainPage/Navbar";
// import AboutUs from "./AboutUs";

// const App = () => {
//   //custom hooks:
//   const dispatch = useDispatch();

//   //selectors:
//   const { user } = useSelector((state) => state.user);
//   const { cart, quantity } = useSelector((state) => state.cart);

//   const loginWithToken = async () => {
//     const token = window.localStorage.getItem("token");
//     if (token) {
//       const response = await axios.get("/api/auth", {
//         headers: {
//           authorization: token,
//         },
//       });
//       dispatch(setUser(response.data));
//     }
//   };

//   const fetchUserCart = async () => {
//     const userCart = user.id;
//     const response = await axios.post("/api/carts/usercart", { userCart });
//     dispatch(setCart(response.data));
//   };

//   const updateCartIcon = (cart) => {
//     cart.length && dispatch(setQuantity(cart[0].cartQuantity));
//   };

//   useEffect(() => {
//     loginWithToken();
//   }, []);

//   useEffect(() => {
//     if (user.id) {
//       fetchUserCart();
//     }
//   }, [user]);

//   useEffect(() => {
//     updateCartIcon(cart);
//   }, [cart]);

//   return (
//     <div>
//       <div>
//         <nav>
//         <Navbar user={user} quantity={quantity} />
//         </nav>
//         <Routes>
//           <Route
//             path="/"
//             element={<MainPage quantity={quantity} user={user} />}
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/createuser" element={<CreateUserPage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/products" element={<Products quantity={quantity} />} />
//           <Route
//             path="/products/:id"

//             element={<SingleProduct cart={cart} quantity={quantity} />}
//           />
//           <Route
//             path="/carts/usercart"
//             element={<Cart quantity={quantity} />}
//           />
//           <Route
//             path="/allUsers"
//             element={<AllUsers user={user} quantity={quantity} />}
//           />
//           <Route
//             path="/allUsers/:id"
//             element={<SingleUser quantity={quantity} />}
//           />
//           <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Products from "./products/Products";
import AllUsers from "./admin/users/AllUsers";
import SingleUser from "./admin/users/SingleUser";
import SingleProduct from "./products/SingleProduct";
import CreateUserPage from "./CreateUser";
import Cart from "./cart/Cart";
import { setUser } from "../store/userSlice";
import { setCart, setQuantity } from "../store/cartSlices/cartSlice";
import { setGuestCart, setGuestCartQuantity, resetGuestCart} from "../store/cartSlices/guestCartSlice";
import MainPage from "./mainPage/MainPage";
import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./mainPage/Navbar";
import AboutUs from "./AboutUs";

const App = () => {
  //custom hooks:
  const dispatch = useDispatch();

  //selectors:
  //! logic for guestCart
  // setGuestCartQuantity
  const {guestCart} = useSelector((state) => state.guestCart);
  const {guestCartQuantity} = useSelector((state) => state.guestCart);
  // const {resetGuestCart} = useSelector((state) => state.guestCart);
  const { user } = useSelector((state) => state.user);
  const { cart, quantity } = useSelector((state) => state.cart);

  const loginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(response.data));
    }
  };

  const fetchUserCart = async () => {
    const userCart = user.id;
    
    const response = await axios.post("/api/carts/usercart", { userCart });
    
    dispatch(setCart(response.data));
    
    // console.log("CART ", {cart});
    console.log("GUESTCART ", guestCart);
    
    // console.log("CART 2 ", cart);
  };
  
  const mergeGuestCart = async (cart) => {
    
    console.log("Merging guest cart...")
    console.log("🛒 CART " + cart[0])
    const productId = guestCart[0];
    const cartId = cart[0].id;
    await axios.put(`/api/carts/${cartId}`, {
      productId,
    })

    const newResponse = axios.post("/api/carts/usercart", { userCart });
    console.log ("New Response ", newResponse)
    dispatch(setCart(newResponse.data));
    
    dispatch(resetGuestCart());
  
  
    // ! code logic to add guestCart to user's cart
    // ? if userCart!== 0 then do below
    // const cartId = cart[0].id;
    // await guestCart.forEach(productId => {
    //   axios.put(`/api/carts/${cartId}`, {
      //     productId,
      //   })
    
    //!   const response = await axios.post("/api/carts/usercart", { userCart });
    
    //! dispatch(setCart(response.data));
    
    
    
  }

  const updateCartIcon = (cart) => {
    cart.length && dispatch(setQuantity(cart[0].cartQuantity));
  };

  useEffect(() => {
    loginWithToken();
  }, []);

  useEffect(() => {
    if (user.id) {
      fetchUserCart();
    }
  }, [user]);
  
  useEffect(() => {
    mergeGuestCart(cart);
    updateCartIcon(cart);
  }, [cart]);

  return (
    <div>
      <div>
        <nav>
        <Navbar user={user} quantity={quantity} />
        </nav>
        <Routes>
          <Route
            path="/"
            element={<MainPage quantity={quantity} user={user} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/createuser" element={<CreateUserPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products quantity={quantity} />} />
          <Route
            path="/products/:id"

            element={<SingleProduct cart={cart} quantity={quantity} />}
          />
          <Route
            path="/carts/usercart"
            element={<Cart quantity={quantity} />}
          />
          <Route
            path="/allUsers"
            element={<AllUsers user={user} quantity={quantity} />}
          />
          <Route
            path="/allUsers/:id"
            element={<SingleUser quantity={quantity} />}
          />
          <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
