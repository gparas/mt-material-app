import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import {
  TextField,
  List,
  ListItem,
} from '@material-ui/core';

import Title from './Title';

const Search = ({ onClick }) => (
  <React.Fragment>
    <Title
      title="Search Map"
      onClick={onClick}
    />
    <List component="div">
      <ListItem>
        <TextField
          id="find-vessel-port"
          label="Find a Vessel or Port"
          variant="outlined"
          margin="normal"
          required
        />
      </ListItem>
      <ListItem>
        <TextField
          id="find-map-location"
          label="Find a Map Location"
          variant="outlined"
          margin="normal"
        />
      </ListItem>
    </List>
  </React.Fragment>
);

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
