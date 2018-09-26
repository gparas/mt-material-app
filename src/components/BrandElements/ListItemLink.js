import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { types } from '../../utils/colors';

const styles = {
  root: {
    '&$selected, &$selected:hover': {
      backgroundColor: types.dark.action.selected,
    },
  },
  divider: {
    borderBottomColor: types.dark.divider,
  },
  button: {
    '&:hover': {
      backgroundColor: types.dark.action.hover,
    },
  },
  selected: {},
  icon: {
    color: 'inherit',
  },
};


function ListItemLink({
  classes,
  icon,
  primary,
  secondary,
  children,
  inset,
  ...other
}) {
  return (
    <li>
      <ListItem
        button
        classes={{
          root: classes.root,
          divider: classes.divider,
          button: classes.button,
          selected: classes.selected,
          gutters: classes.gutters,
        }}
        {...other}
      >
        {icon && <ListItemIcon classes={{ root: classes.icon }}>{icon}</ListItemIcon>}
        <ListItemText
          inset={inset}
          primary={primary}
          secondary={secondary}
          primaryTypographyProps={{ color: 'inherit' }}
        />
        {children}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.node,
  inset: PropTypes.bool,
  secondary: PropTypes.node,
  primary: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(ListItemLink);
