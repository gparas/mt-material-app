import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import Title from './Title';

const Weather = ({ onClick }) => (
  <React.Fragment>
    <Title
      title="Weather Maps"
      onClick={onClick}
    />
  </React.Fragment>
);

Weather.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Weather;
