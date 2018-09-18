import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import FilterTitle from './FilterTitle';

const Layers = ({ onClick }) => (
  <React.Fragment>
    <FilterTitle
      title="Layers"
      onClick={onClick}
    />
  </React.Fragment>
);

Layers.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Layers;
