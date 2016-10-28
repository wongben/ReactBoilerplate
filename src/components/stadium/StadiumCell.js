import React, { PropTypes } from 'react';

const StadiumCell = ({stadiumName, imageURL} ) => (
  <div>
    <h3>{stadiumName}</h3>
    <img src={imageURL} alt={stadiumName} width="72" height="72" />
  </div>
);

StadiumCell.propTypes = {
  stadiumName: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
};

export default StadiumCell;
