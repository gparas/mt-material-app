import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function MenuToggle(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(2 2) scale(0.8)">
        <line fill="none" x1="1" x2="23" y1="12" y2="12" />
        <line fill="none" stroke={fill} x1="1" x2="23" y1="5" y2="5" />
        <line fill="none" stroke={fill} x1="1" x2="23" y1="19" y2="19" />
      </g>
    </SvgIcon>
  );
}

MenuToggle.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

MenuToggle.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default MenuToggle;
