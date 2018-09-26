import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Hotspot(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <circle cx="12" cy="12" fill="none" r="1" stroke={fill} />
        <path d="M17.759,21.359 C20.9,19.422,23,15.961,23,12c0-6.075-4.925-11-11-11S1,5.925,1,12c0,3.961,2.1,7.422,5.241,9.359" fill="none" stroke={fill} strokeLinecap="butt" />
        <path d="M15.141,17.105 C16.854,16.048,18,14.16,18,12c0-3.314-2.686-6-6-6s-6,2.686-6,6c0,2.16,1.146,4.048,2.859,5.105" fill="none" strokeLinecap="butt" />
      </g>
    </SvgIcon>
  );
}

Hotspot.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Hotspot.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Hotspot;
