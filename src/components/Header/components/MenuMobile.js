import React from 'react';

// @material-ui/core components
import {
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


function MenuMobile() {
  return (
    <React.Fragment>
      <List>
        <ListItemLink
          primary="Notifications"
          icon={<NotificationsIcon />}
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

export default MenuMobile;
