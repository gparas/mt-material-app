import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import {
  Tooltip,
  IconButton,
} from '@material-ui/core';

import {
  BadgeEmpty,
} from '../../BrandElements';

function FilterAction({
  tooltipTitle,
  selected,
  icon,
  onClick,
}) {
  return (
    <Tooltip title={tooltipTitle} placement="right">
      <IconButton onClick={onClick} color="inherit">
        { selected
          ? <BadgeEmpty color="secondary">{icon}</BadgeEmpty>
          : icon
        }
      </IconButton>
    </Tooltip>
  );
}

FilterAction.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltipTitle: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FilterAction;
