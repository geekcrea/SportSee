import React from "react";
import PropTypes from 'prop-types';

// IconsButton component: Renders a button with an icon image
function IconsButton(props) {
  const { icon, alt } = props; // Destructuring to extract icon and alt text from props

  return (
    <button className="iconButton">
      <img src={icon} alt={alt} /> {/* Image element for the icon with alt text for accessibility */}
    </button>
  );
}

IconsButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default IconsButton;
