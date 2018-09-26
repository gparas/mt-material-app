import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core
import {
  List,
  Collapse,
} from '@material-ui/core';

// @material-ui/icons
import {
  ExpandMore,
  ExpandLess,
} from '@material-ui/icons';

import {
  ListItemLink,
} from '../../BrandElements';

class SubMenuMobile extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { open } = this.state;
    const { name, menuItem } = this.props;
    return (
      <React.Fragment>
        <ListItemLink
          primary={name}
          onClick={this.handleClick}
        >
          {open ? <ExpandLess nativeColor="white" /> : <ExpandMore nativeColor="white" />}
        </ListItemLink>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List dense>
            {menuItem.map(subMenu => (
              <ListItemLink
                key={subMenu.id}
                divider={subMenu.divider}
                icon={subMenu.icon}
                inset={subMenu.inset}
                primary={subMenu.name}
              />
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

SubMenuMobile.propTypes = {
  name: PropTypes.string.isRequired,
  menuItem: PropTypes.array.isRequired,
};

export default SubMenuMobile;
