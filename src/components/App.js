import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Products from './products/Products';
import AllUsers from './admin/AllUsers';
import SingleProduct from './products/SingleProduct.js';
import CreateUserPage from './CreateUser';
import { setHasError, setUser } from '../store/userSlice';
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
    loginWithToken();
  }, []);

  useEffect(() => {
    if (user.isAdmin) {
      console.log('hello');
      console.log('user', user);
      fetchUsers();
    }
  }, []);

  if (!user.id) return <Login />;

  return (
    <div>
      <h1>L.A.S.T Coffee Shop</h1>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/createuser">Create Account</Link>
          <Link to="/products">Products</Link>
          {user.isAdmin && <Link to="/allUsers">All Active Users</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createuser" element={<CreateUserPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/allUsers" element={<AllUsers />} />
          {user.isAdmin && (
            <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
