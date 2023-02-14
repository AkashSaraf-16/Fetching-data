import React from 'react';

function User(props){
  return (
    <li>
      <h4>Name: {props.name}</h4>
      <p> UserName: {props.username} </p>
    </li>
  );
}

export default User;
