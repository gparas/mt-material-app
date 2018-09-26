import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Lighthouse(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <path d="M1,19 c0,2.2,1.8,4,4,4c1.5,0,2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1s2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1c2.2,0,4-1.8,4-4" fill="none" />
        <polyline fill="none" points="19,18 16,11 8,11 5,18 " stroke={fill} />
        <polyline fill="none" points="16,11 16,7 8,7 8,11 " stroke={fill} />
        <polyline fill="none" points="8,7 8,5 12,2 16,5 16,7 " stroke={fill} />
        <line fill="none" stroke={fill} x1="12" x2="12" y1="11" y2="7" />
      </g>
    </SvgIcon>
  );
}

Lighthouse.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Lighthouse.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Lighthouse;
