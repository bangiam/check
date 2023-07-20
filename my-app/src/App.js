import React, { useState } from 'react';
import './App.css';

function App() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [newAccountEmail, setNewAccountEmail] = useState('');
  const [newAccountPassword, setNewAccountPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [school, setSchool] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleLogin = () => {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
        token: "string",
        user: {
          about: "string",
          address: "string",
          avatar: "string",
          city: "string",
          country: "string",
          email: "string",
          first_name: "string",
          gender: "string",
          id: 0,
          last_name: "string",
          phone_number: "string",
          role: "string",
          user_id: "string"
        }
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error('Lỗi đăng nhập:', error);
      });
  };

  const handleCreateAccount = () => {
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: newAccountEmail,
        password: newAccountPassword,
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        school: school,
        user_id: "string"
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error('Lỗi tạo tài khoản:', error);
      });
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
      </div>
      <button onClick={handleLogin}>Login</button>

      <h1>Register</h1>
      <div>
        <label>FirstName:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>LastName:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={newAccountEmail} onChange={(e) => setNewAccountEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={newAccountPassword} onChange={(e) => setNewAccountPassword(e.target.value)} required />
      </div>
      <div>
        <label>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
      </div>
      <div>
        <label>School:</label>
        <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
      </div>
      <div>
        <label>Birthday:</label>
        <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </div>

      <button onClick={handleCreateAccount}>Register</button>
    </div>
  );
}

export default App;
