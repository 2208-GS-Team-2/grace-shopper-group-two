import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../store/userSlice";
import { resetQuantity } from "../store/cartSlices/cartSlice";

const Home = () => {
  //custom hooks
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // const { cart } = useSelector((state) => state.cart);

  console.log("user", user);

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetCart());
    dispatch(resetUser());
    console.log("log out");
  };

  return (
    <div>
      <h1>Home</h1>
      {/* <div>
        <p>Welcome {user.username}!!</p>
        <button onClick={() => logout()}>Logout</button>
      </div> */}
    </div>
  );
};

export default Home;
