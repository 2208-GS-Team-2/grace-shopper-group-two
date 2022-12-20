import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHasError, setUsers } from "../../../store/userSlice";
import UsersTable from "./UsersTable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const AllUsers = () => {
  // const {user} = useSelector
  // const userAdmin = user.isAdmin.toString();
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Admin Status</StyledTableCell>
            <StyledTableCell align="center">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length
            ? users.map((user) => (
                <UsersTable
                  StyledTableCell={StyledTableCell}
                  StyledTableRow={StyledTableRow}
                  key={user.id}
                  user={user}
                />
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AllUsers;
