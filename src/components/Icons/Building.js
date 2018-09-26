import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Building(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <polyline fill="none" points=" 5,23 1,23 1,14 5,14 " />
        <polyline fill="none" points=" 19,23 23,23 23,14 19,14 " />
        <rect height="22" width="14" fill="none" stroke={fill} x="5" y="1" />
        <line fill="none" stroke={fill} x1="9" x2="10" y1="5" y2="5" />
        <line fill="none" stroke={fill} x1="14" x2="15" y1="5" y2="5" />
        <line fill="none" stroke={fill} x1="9" x2="10" y1="9" y2="9" />
        <line fill="none" stroke={fill} x1="14" x2="15" y1="9" y2="9" />
        <line fill="none" stroke={fill} x1="9" x2="10" y1="13" y2="13" />
        <line fill="none" stroke={fill} x1="14" x2="15" y1="13" y2="13" />
        <line fill="none" stroke={fill} x1="9" x2="10" y1="17" y2="17" />
        <line fill="none" stroke={fill} x1="14" x2="15" y1="17" y2="17" />
        <line fill="none" stroke={fill} x1="12" x2="12" y1="23" y2="21" />
      </g>
    </SvgIcon>
  );
}

Building.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Building.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Building;
