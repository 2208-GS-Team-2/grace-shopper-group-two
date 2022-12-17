import { Button, Table, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setHasError, setSingleUser, setDeleteUser } from "../../../store/userSlice";
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

  //!ADMIN: deletes a user's info
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
      <h2>User Information</h2>
      <Table border={2} style={{minWidth:"1vw"}}>
        <TableRow>
          <TableCell style={{width:"175px"}}>Edit/Delete</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>IsAdmin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell >
            <Button variant="contained" onClick={() => setFormIsShown(true)}>Edit</Button>
            <Button variant="contained" onClick={() => deleteSingleUser()}>Delete</Button>
          </TableCell>
          <TableCell>{singleUser.username}</TableCell>
          <TableCell>{singleUser.email}</TableCell>
          <TableCell>{singleUser.isAdmin ? "True" : "False"}</TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default SingleUser;
