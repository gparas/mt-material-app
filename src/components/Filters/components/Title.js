import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

// @material-ui/icons
import CloseIcon from '@material-ui/icons/Close';

const Title = ({ onClick, title }) => (
  <List component="div">
    <ListItem ContainerComponent="div">
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton onClick={onClick} size="small" aria-label="close">
          <CloseIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Title;
