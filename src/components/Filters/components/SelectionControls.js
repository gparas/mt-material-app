import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const style = theme => ({
  checkbox: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  formLabel: {
    marginBottom: theme.spacing.unit,
  },
});

const FilterSelectionControls = ({
  classes,
  legend,
  label,
  disabled,
}) => (
  <FormControl
    component="fieldset"
    margin="normal"
    disabled={disabled}
    fullWidth
  >
    <FormLabel component="legend" className={classes.formLabel}>{legend}</FormLabel>
    <FormGroup>
      {label.map(name => (
        <FormControlLabel
          key={name}
          control={<Checkbox className={classes.checkbox} value={name} />}
          label={name}
        />
      ))}
    </FormGroup>
  </FormControl>
);

FilterSelectionControls.defaultProps = {
  disabled: false,
};

FilterSelectionControls.propTypes = {
  classes: PropTypes.object.isRequired,
  legend: PropTypes.string.isRequired,
  label: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
};

export default withStyles(style)(FilterSelectionControls);
