import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHasError, setUsers } from "../../../store/userSlice";
import UsersTable from "./UsersTable";
import Navbar from "../../mainPage/Navbar";

const AllUsers = ({ user, quantity }) => {
  //Customs Hooks:
  const dispatch = useDispatch();

  //Selectors
  const { users } = useSelector((state) => state.user);

  //Fetch all users information
  const fetchUsers = async () => {
    try {
      const fetchUsers = await axios.get("/api/users");
      dispatch(setUsers(fetchUsers.data));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="con">
      <div className="header-content">
        {/* <div style={{ textAlign: "center" }}> */}
        <Navbar user={user} quantity={quantity} />

        <h2>All users</h2>
        <Table border={1} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "175px" }}>Update</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length &&
              users.map((user) => {
                return <UsersTable key={user.id} user={user} />;
              })}
          </TableBody>
        </Table>
        {/* </div> */}
      </div>
    </div>
  );
};
export default AllUsers;
