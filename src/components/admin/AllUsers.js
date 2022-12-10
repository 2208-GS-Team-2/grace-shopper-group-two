import { DoNotDisturbOnTotalSilenceSharp } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHasError, setUsers } from '../../store/userSlice';
import UsersTable from './UsersTable';

const AllUsers = () => {
  //Customs Hooks:
  const dispatch = useDispatch();

  //Selectors
  const { users, hasError } = useSelector((state) => state.user);

  //Fetch all users information
  const fetchUsers = async () => {
    try {
      const fetchUsers = await axios.get('/api/users');
      console.log('fetchUsers', fetchUsers.data);
      dispatch(setUsers(fetchUsers.data));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  useEffect(() => {
    console.log(users);
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        <h1>All users</h1>
        <table border={1}>
          <thead>
            <th>Name</th>
            <th>Id</th>
            <th>Password</th>
          </thead>
          {users.length &&
            users.map((user) => {
              return <UsersTable user={user} />;
            })}
        </table>
      </div>
    </>
  );
};
export default AllUsers;
