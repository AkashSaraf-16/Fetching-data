import React from 'react';
import User from './User.js';
function UserList(props) {
  const { users } = props;
  return (
    <ol>
      {users.map((user) => (
        <User name={user.name} username={user.username} />
      ))}
    </ol>
  );
}

export default UserList;
