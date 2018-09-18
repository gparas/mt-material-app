import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components

import FilterTitle from './FilterTitle';
import FilterSelectionControls from './FilterSelectionControls';

const status = ['Underway', 'Anchored'];
const conditions = ['Unknown', 'In Ballast', 'Partially Laden', 'Laden'];

const Vessel = ({ onClick }) => (
  <React.Fragment>
    <FilterTitle
      title="Vessel Filters"
      onClick={onClick}
    />
    <FilterSelectionControls
      legend="Current Status"
      label={status}
    />
    <FilterSelectionControls
      legend="Load Condition"
      label={conditions}
      disabled
    />
  </React.Fragment>
);

Vessel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Vessel;
