import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withStyles,
  Button,
} from '@material-ui/core';

// custom
import SubMenu from './SubMenu';
import appBarRoutes from '../../../routes/appBar';

const styles = () => ({
  mainMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
});

function Menu({ classes }) {
  return (
    <div className={classes.mainMenu}>
      {appBarRoutes.map((menuItem) => {
        if (menuItem.children !== undefined) {
          return (
            <SubMenu
              key={menuItem.id}
              name={menuItem.name}
              icon={menuItem.icon}
              menuItem={menuItem.children}
            />
          );
        }
        return (
          <Button color="inherit" key={menuItem.id}>
            {menuItem.name}
          </Button>
        );
      })}
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
