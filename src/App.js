import React, { useState, useEffect } from 'react';
import UserList from './UserList.js';
import './style.css';

export default function App() {
  const [users, setUser] = useState([]);
  const getUser = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    const finalData = users.map((user) => {
      return {
        name: user.name,
        username: user.username,
      };
    });
    setUser(finalData);
  };
  return (
    <div>
      <h1>ToDo</h1>
      <UserList users={users} />
      <button onClick={getUser}>Get Users</button>
    </div>
  );
}
