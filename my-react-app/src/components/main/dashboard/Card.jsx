import PropTypes from 'prop-types';

function Card({ backgroundColor, imageUrl, data, category }) {
  // Inline style object for the image wrapper, using backgroundColor prop
  const imgWrapperStyle = {
    background: backgroundColor,
  };

  return (
    // Container for the card
    <div className="card">
      <div>
        {/* Div for the image background with dynamic style */}
        <div className='imgBackground' style={imgWrapperStyle}></div>
        {/* Image element with dynamic source and alt text */}
        <img src={imageUrl} alt={category} />
      </div>
      <div className='cardText'>
        {/* Displaying the data and category as text */}
        <p className="data">{data}</p>
        <p className="category">{category}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Card;
