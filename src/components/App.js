import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Products from './products/Products';
import AllUsers from './admin/AllUsers';
import SingleProduct from './products/SingleProduct.js';
import CreateUserPage from './CreateUser';

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loginWithToken = async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const response = await axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });

      dispatch(setUser(response.data));
    }
  };

  useEffect(() => {
    console.log('users', user);
    loginWithToken();
  }, []);

  if (!user.id) return <Login />;

  const regularUser = (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createuser">Create Account</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<CreateUserPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
      </Routes>
    </div>
  );
  const adminUser = (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createuser">Create Account</Link>
        <Link to="/products">Products</Link>
        <Link to="/allUsers">All Active Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<CreateUserPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
      </Routes>
    </div>
  );
  return (
    <div>
      <h1>L.A.S.T Coffee Shop</h1>
      {!user.isAdmin ? regularUser : adminUser}
    </div>
  );
};

export default App;
