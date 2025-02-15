import { Link } from 'react-router-dom';

function Logo() {
  return (
    // Wrapping the logo image in a Link to make it clickable and navigate to the homepage.
    <Link to="/">
      <img
        src='/logo.png' // Source of the logo image
        alt="Logo du site SportSee" // Alternative text for the logo for accessibility
        className={'logo'} // ClassName for CSS styling
      />
    </Link>
  );
}

export default Logo;