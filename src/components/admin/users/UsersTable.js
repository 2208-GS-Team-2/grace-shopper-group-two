import React from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableBody, Button } from '@mui/material';

const UsersTable = ({ user }) => {
  return (
      <TableBody>
        <TableCell>
          <Link key={user.id} to={`/allUsers/${user.id}`}>
              <Button variant= "contained">Update User info</Button>
          </Link>
        </TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.password}</TableCell>
      </TableBody>
  );
};

export default UsersTable;
