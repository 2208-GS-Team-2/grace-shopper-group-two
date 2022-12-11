import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  setHasError,
  setSingleUser,
  setDeleteUser,
} from '../../../store/userSlice';

const SingleUser = () => {
  //Custom Hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Selectors
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

  // to update a single user information by the admin
  const updateSingleUser = (id) => {
    console.log('update');
  };

  // to delete a single user info by the admin
  const deleteSingleUser = async () => {
    dispatch(setDeleteUser(id));
    const { data, deleted } = await axios.delete(`/api/users/${id}`, {});
    navigate('/allUsers');
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
            <button onClick={() => updateSingleUser(singleUser.id)}>
              Edit
            </button>
          </td>
          <td>
            <button onClick={() => deleteSingleUser()}>Delete</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default SingleUser;
