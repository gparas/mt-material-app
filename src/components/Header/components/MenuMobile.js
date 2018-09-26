import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withTheme,
  Divider,
  List,
  ListItemText,
} from '@material-ui/core';

// @material-ui/icons
import NotificationsIcon from '@material-ui/icons/Notifications';

import {
  ListItemLink,
} from '../../BrandElements';


// custom
import SubMenuMobile from './SubMenuMobile';
import appBarRoutes from '../../../routes/appBar';


function MenuMobile({ theme }) {
  return (
    <React.Fragment>
      <List disablePadding>
        <ListItemLink
          primary="Notifications"
          icon={<NotificationsIcon />}
          style={{ ...theme.mixins.toolbar }}
        >
          <ListItemText
            primary={4}
            primaryTypographyProps={{ color: 'inherit' }}
          />
        </ListItemLink>
      </List>
      <Divider />
      <List component="nav">
        {appBarRoutes.map((menuItem) => {
          if (menuItem.children !== undefined) {
            return (
              <SubMenuMobile
                key={menuItem.id}
                name={menuItem.name}
                icon={menuItem.icon}
                menuItem={menuItem.children}
              />
            );
          }
          return (
            <ListItemLink
              key={menuItem.id}
              primary={menuItem.name}
            />
          );
        })}
      </List>
    </React.Fragment>
  );
}

MenuMobile.propTypes = {
  theme: PropTypes.object,
};

export default withTheme()(MenuMobile);
