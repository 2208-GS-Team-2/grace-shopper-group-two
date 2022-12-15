import React from 'react';
import { Link } from 'react-router-dom';

const UsersTable = ({ user }) => {
  return (
    <tbody>
      <td>{user.username}</td>
      <td>{user.id}</td>
      <td>{user.password}</td>
      <Link key={user.id} to={`/allUsers/${user.id}`}>
        <td>
          <button>Click to update user info</button>
        </td>
      </Link>
    </tbody>
  );
};

export default UsersTable;
