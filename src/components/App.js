// 
// import { React, useState, useEffect } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Login, 
//   Products,
//   Admin
// } from './';
// import { Navbar } from './components';

// const App = () => {
//   const [token, setToken] = useState('');
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   const getUser = async () => {
//     const storedToken = window.localStorage.getItem('token');

//     if (storedToken) {
//       setToken(storedToken);
//       const thisUser = await getUserInfo(storedToken);
//       if (thisUser) {
//         setUser(thisUser);
//       }
//     }
//   };

//   function logout() {
//     window.localStorage.removeItem('token');
//     setToken('');
//     setUser({});
//   }

//   useEffect(() => {
//     getUser();
//   }, [token]);

//   return (
//     <>
//       <Navbar logout={logout} token={token} navigate={navigate} user={user} />
//       <Routes>
//         <Route path='/' element={<Home user={user} />} />
//         <Route path='/login' element={<Login setToken={setToken} navigate={navigate} />} />
//         <Route path='/products' element={<Products />} />
//         <Route path='/admin' element={<Admin token={token}/>} />
//       </Routes>
//     </>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import Home from './Home';
import Login from './Login';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Products from './products/Products';
import Admin from './Admin';

const App = () => {
  const [token, setToken] = useState('');  // TODO -- I think this line is needed.
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  if (!user.id) return <Login />;
  return (
    <div>
      <h1>Acme Shopping</h1>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/admin">Admin</Link>
        
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login setToken={setToken} navigate={navigate} />} />
          <Route path="/products" element={<Products />} />
          <Route path='/admin' element={<Admin token={token} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
