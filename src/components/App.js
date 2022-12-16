import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import Products from "./products/Products";
import AllUsers from "./admin/users/AllUsers";
import SingleUser from "./admin/users/SingleUser";
import SingleProduct from "./products/SingleProduct.js";
import CreateUserPage from "./CreateUser";
import Cart from "./cart/Cart";
import { setCart } from "../store/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { setHasError, setUser } from "../store/userSlice";

const App = () => {
  //custom hooks:
  const dispatch = useDispatch();

  //selectors:
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

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
    console.log(user);
    console.log(userCart);
    const response = await axios.post("/api/carts/usercart", { userCart });
    console.log(response.data);
    dispatch(setCart(response.data));
  };

  //To Display the quantity of the cart as a bade on the cart
  const cartQuantity =
    cart.length &&
    cart.map((cartItem) => {
      return (
        <>
          <p>{cartItem.cartQuantity}</p>
        </>
      );
    });

  useEffect(() => {
    if (user.id) {
      fetchUserCart();
    }
  }, [user]);

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <div>
      <h1>L.A.S.T Coffee Shop</h1>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/createuser">Create Account</Link>
          <Link to="/products">Products</Link>
          <Link to="/carts/usercart">
            <Badge badgeContent={cartQuantity}>
              <ShoppingCartIcon fontSize={"large"} />
            </Badge>{" "}
          </Link>
          {user.isAdmin && <Link to="/allUsers">All Active Users</Link>}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<CreateUserPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/carts/usercart" element={<Cart />} />
          <Route path="/allUsers" element={<AllUsers />} />
          <Route path="/allUsers/:id" element={<SingleUser />} />
          <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
