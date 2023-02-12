import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useState, useEffect } from 'react';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users')
     .then(res => res.json())
     .then(json => {
      setUsers(json.data)
     })
     .catch(err => {
      console.war(err);
      alert('Ошибка при получении пользователя')
     }) 
  })
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
