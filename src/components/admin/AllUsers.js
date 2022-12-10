import { DoNotDisturbOnTotalSilenceSharp } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHasError, setUser } from '../../store/userSlice';

const AllUsers = () => {
  //Customs Hooks:
  const dispatch = useDispatch();

  //Selectors
  const { user, hasError } = useSelector((state) => state.user);

  console.log('user', user);
  //Fetch all users information
  const fetchUsers = async () => {
    try {
      const fetchUsers = await axios.get('/api/users');
      console.log('fetchUsers', fetchUsers);
      dispatch(setUser(fetchUsers.data));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  //   useEffect(() => {
  //     console.log(user);
  //     fetchUsers();
  //   });
  return <div>AllUsers</div>;
};
export default AllUsers;
