import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import CloseIcon from '@material-ui/icons/Close';

const style = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const FilterTitle = ({ onClick, title, classes }) => (
  <div className={classes.root}>
    <Typography variant="title">{title}</Typography>
    <IconButton onClick={onClick} size="small" aria-label="close">
      <CloseIcon />
    </IconButton>
  </div>
);

FilterTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(FilterTitle);
