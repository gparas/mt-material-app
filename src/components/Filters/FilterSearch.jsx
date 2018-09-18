import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import TextField from '@material-ui/core/TextField';

import FilterTitle from './FilterTitle';

const Search = ({ onClick }) => (
  <React.Fragment>
    <FilterTitle
      title="Search Map"
      onClick={onClick}
    />
    <TextField
      id="find-vessel-port"
      label="Find a Vessel or Port"
      variant="outlined"
      margin="normal"
      required
    />
    <TextField
      id="find-map-location"
      label="Find a Map Location"
      variant="outlined"
      margin="normal"
    />
  </React.Fragment>
);

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
