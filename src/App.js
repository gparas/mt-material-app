import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import Header from './components/Header/Header';
import Filter from './components/Filters/Filter';

const style = () => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Filter />
      </div>
    );
  }
}

export default withRoot(withStyles(style)(App));
