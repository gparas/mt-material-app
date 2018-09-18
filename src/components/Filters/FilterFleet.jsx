import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import FilterTitle from './FilterTitle';

const Fleet = ({ onClick }) => (
  <React.Fragment>
    <FilterTitle
      title="My Fleet"
      onClick={onClick}
    />
  </React.Fragment>
);

Fleet.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Fleet;
