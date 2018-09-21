import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Filter(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth}>
        <line fill="none" x1="4" x2="20" y1="9" y2="9" />
        <line fill="none" stroke={fill} x1="1" x2="23" y1="3" y2="3" />
        <line fill="none" stroke={fill} x1="7" x2="17" y1="15" y2="15" />
        <line fill="none" x1="10" x2="14" y1="21" y2="21" />
      </g>
    </SvgIcon>
  );
}

Filter.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Filter.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Filter;
