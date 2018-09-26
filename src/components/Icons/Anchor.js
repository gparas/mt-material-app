import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Anchor(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <line fill="none" strokeLinecap="butt" x1="12" x2="12" y1="5" y2="23" />
        <circle cx="12" cy="3" fill="none" r="2" />
        <line fill="none" x1="9" x2="15" y1="9" y2="9" />
        <path d="M20,18.126 C18.504,21.021,15.483,23,12,23c-3.483,0-6.504-1.978-8-4.873" fill="none" stroke={fill} strokeLinecap="butt" />
        <polyline fill="none" points="4,22 4,18 8,18 " stroke={fill} />
        <polyline fill="none" points="16,18 20,18 20,22 " stroke={fill} />
      </g>
    </SvgIcon>
  );
}

Anchor.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Anchor.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Anchor;
