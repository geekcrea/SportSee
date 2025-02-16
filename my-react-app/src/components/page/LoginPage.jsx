import React from 'react';
import LoginMenu from '../login/LoginMenu';

// Hardcoded list of users
const users = [
  {
    id: 12,
    photo: '/src/assets/users/karl.jpg',
    firstName: 'Karl',
  },
  {
    id: 18,
    photo: '/src/assets/users/cecilia.jpg',
    firstName: 'Cecilia',
  },
];

// LoginPage component: Renders the login selection page
function LoginPage() {
  return (
    <div className="login-page">
      <h1>Choisissez un utilisateur</h1>
      <LoginMenu users={users} /> {/* LoginMenu component with users passed as a prop */}
    </div>
  );
}

export default LoginPage;
