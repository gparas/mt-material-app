import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Drawer,
} from '@material-ui/core';

import BadgeEmpty from '../BrandElements/BadgeEmpty';

import {
  Megaphone,
  MenuToggle,
  User,
  Zoom,
} from '../Icons';

// custom
import {
  Menu,
  MenuMobile,
  SearchDrawer,
} from './components';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  rightMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  paperBackgroundColor: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
});

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
                <BadgeEmpty>
                  <Megaphone />
                </BadgeEmpty>
              </IconButton>
            </Hidden>
            <IconButton color="inherit">
              <User />
            </IconButton>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerOpen}
              >
                <BadgeEmpty>
                  <MenuToggle />
                </BadgeEmpty>
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

export default withStyles(styles)(Header);
