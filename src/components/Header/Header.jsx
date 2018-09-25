import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Hidden,
  Drawer,
} from '@material-ui/core';

// @material-ui/icons
import {
  Person,
  Notifications,
  // Menu,
  // Search,
} from '@material-ui/icons';

import {
  Zoom,
} from '../Icons';

// custom
import {
  Menu,
  MenuMobile,
  SearchDrawer,
} from './components';

import headerStyle from './headerStyle';

class Header extends React.Component {
  state = {
    open: false,
    openSearch: false,
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleSearchDrawerOpen = () => {
    this.setState({
      openSearch: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSearchDrawerClose = () => {
    this.setState({ openSearch: false });
  };

  render() {
    const { classes } = this.props;
    const { open, openSearch } = this.state;

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography color="inherit" variant="title">
            MarineTraffic
          </Typography>
          <Hidden mdDown>
            <Menu />
          </Hidden>
          <div className={classes.rightMenu}>
            <IconButton
              color="inherit"
              onClick={this.handleSearchDrawerOpen}
            >
              <Zoom />
            </IconButton>
            <Hidden mdDown>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
            </Hidden>
            <IconButton color="inherit">
              <Person />
            </IconButton>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerOpen}
              >
                <Badge badgeContent={4} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
        <Drawer
          open={open}
          anchor="right"
          onClose={this.handleDrawerClose}
          classes={{
            paper: classes.paperBackgroundColor,
          }}
        >
          <MenuMobile />
        </Drawer>
        <Drawer
          open={openSearch}
          anchor="top"
          onClose={this.handleSearchDrawerClose}
        >
          <SearchDrawer onClose={this.handleSearchDrawerClose} />
        </Drawer>
      </AppBar>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
