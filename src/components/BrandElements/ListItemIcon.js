import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import ListItemIconCore from '@material-ui/core/ListItemIcon';

import { types } from '../../utils/colors';

const styles = {
  root: {
    color: types.dark.action.active,
  },
};


function ListItemIcon({
  classes,
  children,
  className,
  ...other
}) {
  const classOverrides = classNames(
    classes.root,
    className,
  );
  return (
    <ListItemIconCore className={classOverrides} {...other}>
      {children || 'class names'}
    </ListItemIconCore>
  );
}

ListItemIcon.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ListItemIcon);
