import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import Title from './Title';

const Fleet = ({ onClick }) => (
  <React.Fragment>
    <Title
      title="My Fleet"
      onClick={onClick}
    />
  </React.Fragment>
);

Fleet.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Fleet;
