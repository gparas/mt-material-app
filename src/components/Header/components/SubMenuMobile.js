import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';

// @material-ui/icons
import {
  ExpandMore,
  ExpandLess,
} from '@material-ui/icons';

// custom
import headerStyle from '../headerStyle';

class SubMenuMobile extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { open } = this.state;
    const { name, menuItem, classes } = this.props;
    return (
      <React.Fragment>
        <ListItem
          button
          onClick={this.handleClick}
          classes={{
            root: classes.listItem,
            divider: classes.listItemDivider,
          }}
        >
          <ListItemText
            primary={name}
            classes={{
              primary: classes.listItemTextColor,
            }}
          />
          {open ? <ExpandLess nativeColor="white" /> : <ExpandMore nativeColor="white" />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List dense>
            {menuItem.map(subMenu => (
              <ListItem
                key={subMenu.id}
                button
                divider={subMenu.divider}
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
                  primary={subMenu.name}
                  classes={{
                    primary: classes.listItemTextColor,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

SubMenuMobile.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  menuItem: PropTypes.array.isRequired,
};

export default withStyles(headerStyle)(SubMenuMobile);
