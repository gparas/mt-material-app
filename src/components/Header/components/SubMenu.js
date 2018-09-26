import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @material-ui/core
import {
  withStyles,
  Button,
  Popper,
  Grow,
  Paper,
  List,
  ClickAwayListener,
} from '@material-ui/core';

// @material-ui/icons
import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

import {
  ListItemLink,
} from '../../BrandElements';

import { types } from '../../../utils/colors';

// custom
const styles = () => ({
  // Dropdown menu & mobile drawer style
  paperBackgroundColor: {
    backgroundColor: types.dark.background.paper,
  },
  buttonActive: {
    backgroundColor: types.dark.action.selected,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    '&:hover': {
      backgroundColor: types.dark.action.selected,
    },
  },
});

class SubMenu extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const {
      name,
      menuItem,
      classes,
    } = this.props;
    return (
      <React.Fragment>
        <Button
          color="inherit"
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          aria-owns={open ? name : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className={classNames(open && classes.buttonActive)}
        >
          {name}
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id={name}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paperBackgroundColor}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <List dense>
                    {menuItem.map(subMenu => (
                      <ListItemLink
                        key={subMenu.id}
                        divider={subMenu.divider}
                        icon={subMenu.icon}
                        inset={subMenu.inset}
                        primary={subMenu.name}
                      />
                    ))}
                  </List>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    );
  }
}

SubMenu.propTypes = {
  name: PropTypes.string.isRequired,
  menuItem: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubMenu);
