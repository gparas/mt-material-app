import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Zoom(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <line fill="none" x1="22" x2="15.656" y1="22" y2="15.656" />
        <circle cx="10" cy="10" fill="none" r="8" stroke={fill} />
      </g>
    </SvgIcon>
  );
}

Zoom.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Zoom.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Zoom;
