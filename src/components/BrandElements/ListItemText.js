import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import ListItemTextCore from '@material-ui/core/ListItemText';

import { types } from '../../utils/colors';

const styles = {
  root: {
    color: types.dark.text.primary,
  },
};


function ListItemText({
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
    <ListItemTextCore className={classOverrides} {...other}>
      {children || 'class names'}
    </ListItemTextCore>
  );
}

ListItemText.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ListItemText);
