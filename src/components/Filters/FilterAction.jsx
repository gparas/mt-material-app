import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const style = theme => ({
  listItem: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  listItemIcon: {
    margin: 0,
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
        className={classes.listItem}
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(FilterAction);
