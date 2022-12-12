import { DoNotDisturbOnTotalSilenceSharp } from "@mui/icons-material";
import { Table, TableRow, TableHead, TableCell } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHasError, setUsers } from "../../../store/userSlice";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  //Customs Hooks:
  const dispatch = useDispatch();

  //Selectors
  const { users, hasError } = useSelector((state) => state.user);

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
      <div style={{ textAlign: "center" }}>
        <h2>All users</h2>
        <Table border={1} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <TableHead>
            <TableCell>Update</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Password</TableCell>
          </TableHead>
          {users.length &&
            users.map((user) => {
              return <UsersTable user={user} />;
            })}
        </Table>
      </div>
  );
};
export default AllUsers;
