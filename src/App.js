import React, { useState, useEffect, useCallback } from 'react';
import UserList from './UserList.js';
import './style.css';

export default function App() {
  const [users, setUser] = useState([]);
  const getUser = useCallback(async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((v) => v.json())
      .then((users) => {
        return users.map((user) => {
          return {
            name: user.name,
            username: user.username,
          };
        });
      })
      .then((finalUsers) => setUser(finalUsers))
      .catch((err) => console.log(err.message));
    // const data = await fetch('https://jsonplaceholder.typicode.com/users');
    // const users = await data.json();
    // const finalData = users.map((user) => {
    //   return {
    //     name: user.name,
    //     username: user.username,
    //   };
    // });
    // setUser(finalData);
  }, []);
  useEffect(() => {
    console.log('getting users');
    getUser();
  }, [getUser]);
  return (
    <div>
      <h1>ToDo</h1>
      <UserList users={users} />
      <button onClick={getUser}>Get Users</button>
    </div>
  );
}
