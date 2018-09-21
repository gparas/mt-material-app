import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Boat(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth}>
        <polyline fill="none" points="10,6 10,1 14,1 14,6 " stroke={fill} />
        <polyline fill="none" points="5,13.9 5,6 19,6 19,13.9 " stroke={fill} strokeLinecap="butt" />
        <path d="M1,19.1 c0,2.2,1.8,4,4,4c1.5,0,2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1s2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1c2.2,0,4-1.8,4-4" fill="none" />
        <polyline fill="none" points="5,19 3,15 12,10 21,15 19,19 " stroke={fill} />
      </g>
    </SvgIcon>
  );
}

Boat.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Boat.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Boat;
