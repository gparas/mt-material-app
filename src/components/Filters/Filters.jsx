import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @material-ui/core components
import {
  Hidden,
  Drawer,
  withStyles,
} from '@material-ui/core';

import {
  Boat,
  Filter,
  Layer,
  Wind,
  Zoom,
} from '../Icons';

import {
  Action,
  Search,
  Vessel,
  Fleet,
  Layers,
  Weather,
} from './components';

import filterStyle from './filterStyle';

const actions = [
  { icon: <Zoom />, name: 'Search' },
  { icon: <Filter />, name: 'Vessel' },
  { icon: <Boat />, name: 'Fleet' },
  { icon: <Layer />, name: 'Layers' },
  { icon: <Wind />, name: 'Weather' },
];

class Filters extends React.Component {
  state = {
    open: false,
    activeFilter: 0,
    selectedIndex: null,
  };

  handleDrawerOpen = (i) => {
    this.setState({
      open: true,
      activeFilter: i,
      selectedIndex: i,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
      selectedIndex: null,
    });
  };

  getFilterContent = () => {
    const { activeFilter } = this.state;
    switch (activeFilter) {
      case 0:
        return <Search onClick={this.handleDrawerClose} />;
      case 1:
        return <Vessel onClick={this.handleDrawerClose} />;
      case 2:
        return <Fleet onClick={this.handleDrawerClose} />;
      case 3:
        return <Layers onClick={this.handleDrawerClose} />;
      case 4:
        return <Weather onClick={this.handleDrawerClose} />;
      default:
        throw new Error('Unknown step');
    }
  }

  render() {
    const { classes } = this.props;
    const { open, selectedIndex } = this.state;
    return (
      <React.Fragment>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaperAction,
            }}
          >
            <div className={classes.toolbar} />
            {actions.map((action, i) => (
              <Action
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                selected={selectedIndex === i}
                onClick={() => this.handleDrawerOpen(i)}
              />
            ))}
          </Drawer>
        </Hidden>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbar} />
          {this.getFilterContent()}
        </Drawer>
      </React.Fragment>
    );
  }
}


Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(filterStyle)(Filters);
