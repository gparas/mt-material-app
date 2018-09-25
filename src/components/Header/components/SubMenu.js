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
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
} from '@material-ui/core';

// @material-ui/icons
import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

// custom
import headerStyle from '../headerStyle';

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
                      <ListItem
                        key={subMenu.id}
                        divider={subMenu.divider}
                        onClick={this.handleClose}
                        classes={{
                          root: classes.listItem,
                          divider: classes.listItemDivider,
                        }}
                      >
                        {
                          subMenu.icon !== undefined && (
                            <ListItemIcon
                              className={classes.listItemIconColor}
                            >
                              {subMenu.icon}
                            </ListItemIcon>
                          )
                        }
                        <ListItemText
                          inset={subMenu.inset}
                          classes={{
                            primary: classes.listItemTextColor,
                          }}
                          primary={subMenu.name}
                        />
                      </ListItem>
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

export default withStyles(headerStyle)(SubMenu);
