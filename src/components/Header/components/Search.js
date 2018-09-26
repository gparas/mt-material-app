import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  Input,
} from '@material-ui/core';

// @material-ui/icons
import SearchIcon from '@material-ui/icons/Search';

function Search({ classes }) {
  return (
    <div className={classes.searchWrapper}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Input placeholder="Vessel, Port, etc." disableUnderline className={classes.searchInput} />
    </div>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Search;
