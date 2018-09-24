import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  withStyles,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

// @material-ui/icons
import NotificationsIcon from '@material-ui/icons/Notifications';

// custom
import HeaderSubMenuMobile from './HeaderSubMenuMobile';
import appBarRoutes from '../../routes/appBar';
import headerStyle from './headerStyle';


function HeaderMenuMobile({ classes }) {
  return (
    <React.Fragment>
      <List component="div">
        <ListItem
          button
          classes={{
            root: classes.listItem,
          }}
        >
          <ListItemIcon className={classes.listItemIconColor}>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Notifications"
            classes={{
              primary: classes.listItemTextColor,
            }}
          />
          <ListItemText secondary={4} />
        </ListItem>
      </List>
      <Divider className={classes.listItemDivider} />
      <List component="nav">
        {appBarRoutes.map((menuItem) => {
          if (menuItem.children !== undefined) {
            return (
              <HeaderSubMenuMobile
                key={menuItem.id}
                name={menuItem.name}
                icon={menuItem.icon}
                menuItem={menuItem.children}
              />
            );
          }
          return (
            <ListItem
              button
              key={menuItem.id}
              classes={{
                root: classes.listItem,
                divider: classes.listItemDivider,
              }}
            >
              <ListItemText
                primary={menuItem.name}
                classes={{
                  primary: classes.listItemTextColor,
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
}

HeaderMenuMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(HeaderMenuMobile);
