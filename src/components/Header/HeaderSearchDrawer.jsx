import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import SearchIcon from '@material-ui/icons/Search';
import ArrowIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  arrowButton: {
    marginLeft: 12,
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

function HeaderSearchDrawer({ onClose, classes }) {
  return (
    <Toolbar disableGutters>
      <IconButton
        color="inherit"
        aria-label="Close"
        onClick={onClose}
        className={classes.arrowButton}
      >
        <ArrowIcon />
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
        <SearchIcon />
      </IconButton>
    </Toolbar>
  );
}

HeaderSearchDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(HeaderSearchDrawer);
