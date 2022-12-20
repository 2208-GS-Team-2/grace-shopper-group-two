import React from "react";
import { Link } from "react-router-dom";

const UsersTable = ({ user, StyledTableCell, StyledTableRow }) => {
  const userAdmin = user.isAdmin.toString();
  return (
    <StyledTableRow key={user.id}>
      <StyledTableCell align="center">{user.username}</StyledTableCell>
      <StyledTableCell align="center">{user.email}</StyledTableCell>
      <StyledTableCell align="center">{userAdmin}</StyledTableCell>

      <StyledTableCell align="center">
        <Link key={user.id} to={`/allUsers/${user.id}`}>
          Update Info
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default UsersTable;
