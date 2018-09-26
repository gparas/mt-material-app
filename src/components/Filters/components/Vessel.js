import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import SelectionControls from './SelectionControls';

const status = ['Underway', 'Anchored'];
const conditions = ['Unknown', 'In Ballast', 'Partially Laden', 'Laden'];

const Vessel = ({ onClick }) => (
  <React.Fragment>
    <Title
      title="Vessel Filters"
      onClick={onClick}
    />
    <SelectionControls
      legend="Current Status"
      label={status}
    />
    <SelectionControls
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
