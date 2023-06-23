import React, { useState, useEffect } from 'react';

function Display() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      console.log(data); 
      setUsers(data.users);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  


  return (
    <div className="app">
      <h1>Displaying json data in table format of the below link</h1>
      <a href='https://dummyjson.com/users'>dummy json</a>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
