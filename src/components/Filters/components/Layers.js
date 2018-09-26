import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import Title from './Title';

const Layers = ({ onClick }) => (
  <React.Fragment>
    <Title
      title="Layers"
      onClick={onClick}
    />
  </React.Fragment>
);

Layers.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Layers;
