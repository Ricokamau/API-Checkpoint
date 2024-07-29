import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Ensure you import the CSS file

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
