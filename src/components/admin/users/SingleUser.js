import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  setHasError,
  setSingleUser,
  setDeleteUser,
} from "../../../store/userSlice";
import UpdateUser from "./UpdateUser";

const SingleUser = () => {
  //STATE
  const [formIsShown, setFormIsShown] = useState(false);

  //Custom Hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Selectors
  const { singleUser } = useSelector((state) => state.user);

  const fetchSingleUser = async () => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      dispatch(setSingleUser(response.data));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  // to delete a single user info by the admin
  const deleteSingleUser = async () => {
    dispatch(setDeleteUser(id));
    const { data, deleted } = await axios.delete(`/api/users/${id}`, {});
    navigate("/allUsers");
  };

  useEffect(() => {
    fetchSingleUser(id);
  }, []);

  if (formIsShown) {
    return (
      <>
        <UpdateUser singleUser={singleUser} setFormIsShown={setFormIsShown} />
      </>
    );
  }
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
          <td>{singleUser.isAdmin ? "True" : "False"}</td>
          <td>
            <button onClick={() => setFormIsShown(true)}>Edit</button>
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
