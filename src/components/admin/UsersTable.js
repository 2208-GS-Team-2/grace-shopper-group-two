import React from 'react';

const UsersTable = ({ user }) => {
  return (
    <tbody>
      <td>{user.username}</td>
      <td>{user.id}</td>
      <td>{user.password}</td>
    </tbody>
  );
};

export default UsersTable;
