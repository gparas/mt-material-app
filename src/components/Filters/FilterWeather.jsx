import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import FilterTitle from './FilterTitle';

const Weather = ({ onClick }) => (
  <React.Fragment>
    <FilterTitle
      title="Weather Maps"
      onClick={onClick}
    />
  </React.Fragment>
);

Weather.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Weather;
