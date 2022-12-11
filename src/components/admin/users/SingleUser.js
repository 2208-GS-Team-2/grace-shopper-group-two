import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setHasError, setSingleUser } from '../../../store/userSlice';

const SingleUser = () => {
  //Custom Hooks
  const { id } = useParams();
  console.log('id', id);
  const dispatch = useDispatch();
  const { singleUser } = useSelector((state) => state.user);

  const fetchSingleUser = async () => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      console.log('single User', response.data);
      dispatch(setSingleUser(response.data));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  useEffect(() => {
    fetchSingleUser(id);
    console.log('singleUser ', singleUser);
  }, []);

  return (
    <>
      <h3>User Information</h3>
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>IsAdmin</td>
          <td colSpan={2}>Status</td>
        </tr>
        <tr>
          <td>{singleUser.username}</td>
          <td>{singleUser.email}</td>
          <td>{singleUser.isAdmin}</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default SingleUser;
