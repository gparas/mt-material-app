import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Wind(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <path d="M11,4c0.4-1.2,1.5-2,2.8-2 c1.7,0,3,1.3,3,3s-1.3,3-3,3H1" fill="none" stroke={fill} />
        <path d="M5,20c0.4,1.2,1.5,2,2.8,2 c1.7,0,3-1.3,3-3s-1.3-3-3-3H1" fill="none" stroke={fill} />
        <path d="M17.2,16 c0.4,1.2,1.5,2,2.8,2c1.7,0,3-1.3,3-3s-1.3-3-3-3H1" fill="none" />
      </g>
    </SvgIcon>
  );
}

Wind.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Wind.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Wind;
