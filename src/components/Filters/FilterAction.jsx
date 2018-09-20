import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withStyles,
  Tooltip,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';


const style = theme => ({
  listItem: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    '&:hover': {
      backgroundColor: theme.palette.brand.action.hover,
    },
    '&$selected': {
      backgroundColor: theme.palette.brand.action.selected,
      '&:hover': {
        backgroundColor: theme.palette.brand.action.hover,
      },
    },
  },
  selected: {},
  listItemIcon: {
    margin: 0,
    color: theme.palette.primary.contrastText,
  },
});

function FilterAction({
  classes,
  tooltipTitle,
  selected,
  icon,
  onClick,
}) {
  return (
    <Tooltip title={tooltipTitle} placement="right">
      <ListItem
        button
        selected={selected}
        onClick={onClick}
        classes={{
          root: classes.listItem,
          selected: classes.selected,
        }}
      >
        <ListItemIcon className={classes.listItemIcon}>
          {icon}
        </ListItemIcon>
      </ListItem>
    </Tooltip>
  );
}

FilterAction.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltipTitle: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(FilterAction);
