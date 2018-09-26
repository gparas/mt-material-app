import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withStyles,
  Input,
  Toolbar,
  IconButton,
} from '@material-ui/core';

// Icons
import {
  IoIosArrowRoundBack,
  IoIosSearch,
} from 'react-icons/io';

const styles = theme => ({
  arrowButton: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: 20,
  },
  searchButton: {
    marginRight: 12,
  },
  searchInput: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
});

function SearchDrawer({ onClose, classes }) {
  return (
    <Toolbar disableGutters>
      <IconButton
        color="inherit"
        aria-label="Close"
        onClick={onClose}
        className={classes.arrowButton}
      >
        <IoIosArrowRoundBack />
      </IconButton>
      <Input
        disableUnderline
        fullWidth
        autoFocus
        placeholder="Vessel, Port, etc."
        className={classes.searchInput}
      />
      <IconButton
        color="inherit"
        aria-label="Search"
        className={classes.searchButton}
      >
        <IoIosSearch />
      </IconButton>
    </Toolbar>
  );
}

SearchDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchDrawer);
