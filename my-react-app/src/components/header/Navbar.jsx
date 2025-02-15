import { NavLink } from 'react-router-dom';

// Functional component for the navbar
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Accueil</NavLink>
      {/* Links to error 404 pages */}
      <NavLink to="*">Profil</NavLink>
      <NavLink to="*">Réglage</NavLink>
      <NavLink to="*">Communauté</NavLink>
    </nav>
  );
}

export default Navbar;