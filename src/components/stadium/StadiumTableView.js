import React from 'react';
import StadiumCell from './StadiumCell';
const StadiumTableView = ({ datasource }) => (
  <div>
    <ul>
      {
        datasource.map( (stadium, index) =>(
          <StadiumCell stadiumName={stadium.name} imageURL={stadium.imageURL} key={index} />
        ))
      }
    </ul>
  </div>
);
StadiumTableView.propTypes = {
  datasource: React.PropTypes.array.isRequired
};

export default StadiumTableView;
