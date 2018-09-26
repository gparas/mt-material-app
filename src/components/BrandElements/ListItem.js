import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import ListItemCore from '@material-ui/core/ListItem';

import { types } from '../../utils/colors';

const styles = {
  root: {
    '&$selected, &$selected:hover': {
      backgroundColor: types.dark.action.selected,
    },
  },
  focusVisible: {
    backgroundColor: types.dark.action.hover,
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
};


function ListItem({
  classes,
  children,
  className,
  ...other
}) {
  const classOverrides = classNames(
    classes.root,
    classes.divider,
    classes.button,
    className,
  );
  return (
    <ListItemCore className={classOverrides} {...other}>
      {children || 'class names'}
    </ListItemCore>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ListItem);
