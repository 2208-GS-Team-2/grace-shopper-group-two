import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import { setUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import Products from "./products/Products";
import SingleProduct from "./products/SingleProduct.js";
import CreateUserPage from "./CreateUser";
import { setCart } from '../store/cartSlice'

const App = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    // console.log(user);
    // if(user){
      const response = await axios.get('/api/carts/usercart', {userCart})
      console.log(response);
      // }
      dispatch(setCart(response));
  }


  useEffect(() => {
    loginWithToken();
  }, []);

  // useEffect(() => {
  //   // if(user){
  //     fetchUserCart();
  //   // }
  // }, [user]); //!dependency

  // if (!user.id) return <Login />;
  return (
    <div>
      <h1>L.A.S.T Coffee Shop</h1>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/createuser">Create Account</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<CreateUserPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
