import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { capitalize } from '../../utils/helpers';

const RADIUS = 2;

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  // Styles applied to the badge `span` element.
  badge: {
    position: 'absolute',
    top: -RADIUS,
    right: -RADIUS,
    width: RADIUS * 4,
    height: RADIUS * 4,
    borderRadius: '50%',
    backgroundColor: theme.palette.color,
    zIndex: 1,
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  colorError: {
    backgroundColor: theme.palette.error.main,
  },
});

function BadgeEmpty(props) {
  const {
    children,
    classes,
    className: classNameProp,
    color,
    component: ComponentProp,
    ...other
  } = props;

  const badgeClassName = classNames(classes.badge, {
    [classes[`color${capitalize(color)}`]]: color !== 'default',
  });

  return (
    <ComponentProp className={classNames(classes.root, classNameProp)} {...other}>
      {children}
      <span className={badgeClassName} />
    </ComponentProp>
  );
}

BadgeEmpty.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
};

BadgeEmpty.defaultProps = {
  color: 'error',
  component: 'span',
};

export default withStyles(styles, { name: 'MuiBadgeEmpty' })(BadgeEmpty);
