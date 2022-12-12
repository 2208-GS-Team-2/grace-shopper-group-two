import React from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableBody, Button, TableRow } from '@mui/material';

const UsersTable = ({ user }) => {
  const userAdmin = user.isAdmin.toString();
  return (
      <TableRow>
          <TableCell>
            <Link key={user.id} to={`/allUsers/${user.id}`}>
                <Button variant="contained">Update User Info</Button>
            </Link>
          </TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{userAdmin}</TableCell>
      </TableRow>
  );
};

export default UsersTable;
