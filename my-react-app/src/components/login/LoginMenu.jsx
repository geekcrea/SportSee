import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

// Functional component for the login menu
function LoginMenu({ users }) {
  return (
    <div className="login-menu">
      {/* Mapping each user object to a UserCard component */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

LoginMenu.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LoginMenu;
