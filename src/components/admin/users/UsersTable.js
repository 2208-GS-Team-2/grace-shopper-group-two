import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ConstructionOutlined } from "@mui/icons-material";

const UsersTable = ({ user, StyledTableCell, StyledTableRow }) => {
  const userAdmin = user.isAdmin.toString();

  return (
    <StyledTableRow key={user.id}>
      <StyledTableCell align="center">{user.username}</StyledTableCell>
      <StyledTableCell align="center">{user.email}</StyledTableCell>
      <StyledTableCell align="center">
        {userAdmin === "true" ? "Yes" : "No"}
      </StyledTableCell>

      <StyledTableCell align="center">
        <Link key={user.id} to={`/allUsers/${user.id}`}>
          Update Info
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default UsersTable;
